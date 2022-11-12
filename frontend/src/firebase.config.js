import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHrRz8okIVdr8CzPMEsq6GPoqc55UsIJw",
  authDomain: "gardenstore-7ffba.firebaseapp.com",
  databaseURL: "https://gardenstore-7ffba-default-rtdb.firebaseio.com",
  projectId: "gardenstore-7ffba",
  storageBucket: "gardenstore-7ffba.appspot.com",
  messagingSenderId: "172938031044",
  appId: "1:172938031044:web:87ccec2fa583e8ef8d7e91",
};

//if app is not already initialized

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, storage, firestore };
