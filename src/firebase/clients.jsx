import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHfsesJH2JwGx14bBa77tmv97GlPl2LvM",
    authDomain: "tienda-sabores.firebaseapp.com",
    projectId: "tienda-sabores",
    storageBucket: "tienda-sabores.appspot.com",
    messagingSenderId: "1076869218111",
    appId: "1:1076869218111:web:cbc93c3f300d45e4881d8a"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);