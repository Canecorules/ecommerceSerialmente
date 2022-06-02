// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBtSIbtl_7zrq4wURCWJjdlkANaq9PwQ",
  authDomain: "reactprojectecommerce-f3735.firebaseapp.com",
  projectId: "reactprojectecommerce-f3735",
  storageBucket: "reactprojectecommerce-f3735.appspot.com",
  messagingSenderId: "656114489401",
  appId: "1:656114489401:web:b25ee23baf269c0c2495e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}