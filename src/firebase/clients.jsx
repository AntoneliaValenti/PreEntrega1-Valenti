import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDbAM2Dz1My8ouJuklxLU_tE0qUhSj27K0",
    authDomain: "t-sabores.firebaseapp.com",
    projectId: "t-sabores",
    storageBucket: "t-sabores.appspot.com",
    messagingSenderId: "617027690918",
    appId: "1:617027690918:web:51916293e6ef2df3d5ef67"

}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)