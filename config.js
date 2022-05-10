import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3dvSIZZjO2K3xT1IZ23IG-IaIybp412s",
  authDomain: "bibliotecaeletronica-c0665.firebaseapp.com",
  projectId: "bibliotecaeletronica-c0665",
  storageBucket: "bibliotecaeletronica-c0665.appspot.com",
  messagingSenderId: "593946810621",
  appId: "1:593946810621:web:23475f795c3be7e60e0694"
};


export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);
export const auth = getAuth(app); 

