import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeUHpBaNsWEN2kl1rUcNB-ftQCCk5Puvw",
  authDomain: "hope4child-2e9a7.firebaseapp.com",
  projectId: "hope4child-2e9a7",
  storageBucket: "hope4child-2e9a7.appspot.com",
  messagingSenderId: "414064356432",
  appId: "1:414064356432:web:f54b56d8eb75b6cd15b555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

