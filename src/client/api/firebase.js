import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCVX8a4YlKIBo3-EsoCLicTrCvI90b2qFM",
  authDomain: "projecto-react-js.firebaseapp.com",
  projectId: "projecto-react-js",
  storageBucket: "projecto-react-js.appspot.com",
  messagingSenderId: "371902824273",
  appId: "1:371902824273:web:08d751dcf709fc04375d70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
