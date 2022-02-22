import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCs16wWIv0mORYpppnLTDsRIF_dm1z0G8",
  authDomain: "rn-ubereats.firebaseapp.com",
  projectId: "rn-ubereats",
  storageBucket: "rn-ubereats.appspot.com",
  messagingSenderId: "325166031931",
  appId: "1:325166031931:web:d4767b58faa0cd7baee81e"
};


if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
