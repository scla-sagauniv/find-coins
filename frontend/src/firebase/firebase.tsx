// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const firebaseConfig = {
  apiKey: "AIzaSyA9-w1G_ag4Wnvz1IYk5LQqnE5gnNZmWSQ",
  authDomain: "find-coins.firebaseapp.com",
  projectId: "find-coins",
  storageBucket: "find-coins.appspot.com",
  messagingSenderId: "919197024112",
  appId: "1:919197024112:web:13c5edb0538e1f1325d9b5",
  measurementId: "G-7DXWLXPQQY"
};

// Initialize Firebaseco
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export default firebaseApp;





