import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWV8RCv_6EaRwrNl9eUbMSlzQvt6b5h1A",
  authDomain: "ditter-fce85.firebaseapp.com",
  databaseURL: "https://ditter-fce85-default-rtdb.firebaseio.com",
  projectId: "ditter-fce85",
  storageBucket: "ditter-fce85.firebasestorage.app",
  messagingSenderId: "927721505591",
  appId: "1:927721505591:web:430aae2d991063400ad0b2",
  measurementId: "G-ER0HHE3XME"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
