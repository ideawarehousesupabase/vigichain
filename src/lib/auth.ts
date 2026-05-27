import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export type User = {
  id: string;
  name: string;
  organization: string;
  email: string;
  password: string;
};

const USERS = "users";
const SESSION_KEY = "vc_session";

/**
 * Create a new user document in Firestore.
 */
export async function signUp(
  name: string,
  organization: string,
  email: string,
  password: string,
): Promise<User> {
  // Check if email already exists
  const q = query(collection(db, USERS), where("email", "==", email));
  const existing = await getDocs(q);
  if (!existing.empty) {
    throw new Error("An account with this email already exists.");
  }

  // Create a new document with auto-generated ID
  const ref = doc(collection(db, USERS));
  const user: User = { id: ref.id, name, organization, email, password };

  await setDoc(ref, {
    name,
    organization,
    email,
    password,
    createdAt: serverTimestamp(),
  });

  // Save session locally
  setSession(user);
  return user;
}

/**
 * Sign in by querying Firestore for matching email + password.
 */
export async function signIn(email: string, password: string): Promise<User> {
  const q = query(
    collection(db, USERS),
    where("email", "==", email),
    where("password", "==", password),
  );
  const snap = await getDocs(q);

  if (snap.empty) {
    throw new Error("Invalid email or password.");
  }

  const docSnap = snap.docs[0];
  const data = docSnap.data();
  const user: User = {
    id: docSnap.id,
    name: data.name ?? "",
    organization: data.organization ?? "",
    email: data.email ?? "",
    password: data.password ?? "",
  };

  setSession(user);
  return user;
}

/**
 * Log out — clear local session.
 */
export function logOut(): void {
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Get current session from localStorage.
 */
export function getSession(): User | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

/**
 * Save session to localStorage.
 */
function setSession(user: User): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

/**
 * Update user profile in Firestore and local session.
 */
export async function updateProfile(patch: Partial<Omit<User, "id">>): Promise<void> {
  const session = getSession();
  if (!session) throw new Error("Not authenticated");

  await updateDoc(doc(db, USERS, session.id), patch);

  // Update local session
  const updated = { ...session, ...patch };
  setSession(updated);
}

/**
 * Change user password in Firestore and local session.
 */
export async function changeUserPassword(currentPassword: string, newPassword: string): Promise<void> {
  const session = getSession();
  if (!session) throw new Error("Not authenticated");
  if (session.password !== currentPassword) throw new Error("Current password is incorrect.");

  await updateDoc(doc(db, USERS, session.id), { password: newPassword });
  setSession({ ...session, password: newPassword });
}
