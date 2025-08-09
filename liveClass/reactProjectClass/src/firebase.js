import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQvgdVpJ-WVf94wzeTAAj43ob6a_VSqig",
  authDomain: "fir-with-react-1b830.firebaseapp.com",
  projectId: "fir-with-react-1b830",
  storageBucket: "fir-with-react-1b830.firebasestorage.app",
  messagingSenderId: "1045665757260",
  appId: "1:1045665757260:web:3b0812bd2ced3e98a5dce9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app)
