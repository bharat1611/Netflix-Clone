import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKUGZuIec-u6Alw3JtigGDIL2kAyQVaa8",
  authDomain: "react-netflix-clone-b50b4.firebaseapp.com",
  projectId: "react-netflix-clone-b50b4",
  storageBucket: "react-netflix-clone-b50b4.appspot.com",
  messagingSenderId: "1018954958656",
  appId: "1:1018954958656:web:31a1c64e3b480cf9b91ca5",
  measurementId: "G-FVKL3QCF9D"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);