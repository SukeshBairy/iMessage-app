import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnMAejrF56OdXvo92eV7DViuznr0BeNVE",
  authDomain: "imessage-app-7b705.firebaseapp.com",
  projectId: "imessage-app-7b705",
  storageBucket: "imessage-app-7b705.appspot.com",
  messagingSenderId: "106438006329",
  appId: "1:106438006329:web:d689aafa74eb93d001dfe8",
  measurementId: "G-Y4YD3WC4GG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
