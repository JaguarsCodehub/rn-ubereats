import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCs16wWIv0mORYpppnLTDsRIF_dm1z0G8",
  authDomain: "rn-ubereats.firebaseapp.com",
  projectId: "rn-ubereats",
  storageBucket: "rn-ubereats.appspot.com",
  messagingSenderId: "325166031931",
  appId: "1:325166031931:web:d4767b58faa0cd7baee81e"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
