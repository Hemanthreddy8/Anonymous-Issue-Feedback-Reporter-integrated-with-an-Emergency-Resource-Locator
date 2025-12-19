import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxPevCRVzQdud28AQ6Wu_ftrEFLT4vjzg",
  authDomain: "peak-safe-hackathon.firebaseapp.com",
  projectId: "peak-safe-hackathon",
  storageBucket: "peak-safe-hackathon.firebasestorage.app",
  messagingSenderId: "769751452632",
  appId: "1:769751452632:web:fec4783b1933a0f20f80ad",
  measurementId: "G-PMNNE70PGX"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
