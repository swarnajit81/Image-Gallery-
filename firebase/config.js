// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQXGx1UiEbs5MtfpsICAeSxLriwqrPQU",
  authDomain: "image-gallery-a4a61.firebaseapp.com",
  projectId: "image-gallery-a4a61",
  storageBucket: "image-gallery-a4a61.appspot.com",
  messagingSenderId: "138241404439",
  appId: "1:138241404439:web:2350fd31d6f67b9f9ff652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage(app)
export const db = getFirestore()