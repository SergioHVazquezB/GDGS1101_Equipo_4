import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBuwBqx6E2qEyXDbhBNif4Vegk8Y2k7y5s",
  authDomain: "allnotes-ae6c5.firebaseapp.com",
  projectId: "allnotes-ae6c5",
  storageBucket: "allnotes-ae6c5.appspot.com",
  messagingSenderId: "810921526124",
  appId: "1:810921526124:web:0ef12d314081999b4ca949",
  measurementId: "G-TWGC0EVS2M"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;