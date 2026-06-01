import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

console.log("Firebase Init check:");
console.log("- API Key exists?", !!firebaseConfig.apiKey);
console.log("- API Key value starts with:", firebaseConfig.apiKey ? firebaseConfig.apiKey.substring(0, 5) : "UNDEFINED!");
console.log("- Auth Domain:", firebaseConfig.authDomain);


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
