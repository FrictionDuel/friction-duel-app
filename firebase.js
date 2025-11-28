// Firebase v9 modular style
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, update, onDisconnect } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTHDOMAIN",
  databaseURL: "https://YOUR_DB.firebaseio.com",
  projectId: "YOUR_PROJECTID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, push, update, onDisconnect };
