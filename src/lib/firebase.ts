import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjmRiH9uzPKSCYN92VyOCj5mhKav2dV-M",
  authDomain: "vigi-chain.firebaseapp.com",
  projectId: "vigi-chain",
  storageBucket: "vigi-chain.firebasestorage.app",
  messagingSenderId: "569492402208",
  appId: "1:569492402208:web:e2ca46779f2d75f5e00c45",
  measurementId: "G-REXNLFD7DJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
