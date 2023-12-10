import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDpaInyjzm45Nj4KXTjLzEH3S3l4CV1Fts",
    authDomain: "coderhouse-ecommerce-film.firebaseapp.com",
    projectId: "coderhouse-ecommerce-film",
    storageBucket: "coderhouse-ecommerce-film.appspot.com",
    messagingSenderId: "1035874590012",
    appId: "1:1035874590012:web:74fcc2e9ed020e9151d239",
    measurementId: "G-XC5JJRGNEF"
  };


export default {
    apiKey: "AIzaSyDpaInyjzm45Nj4KXTjLzEH3S3l4CV1Fts",
    authDomain: "coderhouse-ecommerce-film.firebaseapp.com",
    projectId: "coderhouse-ecommerce-film",
    storageBucket: "coderhouse-ecommerce-film.appspot.com",
    messagingSenderId: "1035874590012",
    appId: "1:1035874590012:web:74fcc2e9ed020e9151d239",
    measurementId: "G-XC5JJRGNEF"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
