import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2noYNuahnd9yWXfC4AmQ9s6WC3npgonA",
  authDomain: "music-372bc.firebaseapp.com",
  projectId: "music-372bc",
  storageBucket: "music-372bc.appspot.com",
  appId: "1:271816236313:web:9fe1cc6b47f705b3613988",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
