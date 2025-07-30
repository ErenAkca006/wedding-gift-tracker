// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaxIoSwR39WnFUiQFRqGwlCGza__lo0pA",
  authDomain: "wedding-4c706.firebaseapp.com",
  projectId: "wedding-4c706",
  storageBucket: "wedding-4c706.firebasestorage.app",
  messagingSenderId: "852095859951",
  appId: "1:852095859951:web:8a397a75f55a8ad68bef1a",
  measurementId: "G-NMZ7WL0SEG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
