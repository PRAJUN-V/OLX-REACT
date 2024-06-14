import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER,
//   appId: import.meta.env.VITE_REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDSWaP_-YBh2IM8BwekDJWqKF6DOxeBDso",
  authDomain: "olx-react-8030c.firebaseapp.com",
  projectId: "olx-react-8030c",
  storageBucket: "olx-react-8030c.appspot.com",
  messagingSenderId: "871847853696",
  appId: "1:871847853696:web:143f844056ad1f84103065",
  measurementId: "G-TRKXTFN5Z9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
