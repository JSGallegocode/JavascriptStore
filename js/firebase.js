import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtfX25C3Ryp2_C6lUJSVL1M2cC3rHAsMk",
  authDomain: "juantiendafukk.firebaseapp.com",
  projectId: "juantiendafukk",
  storageBucket: "juantiendafukk.appspot.com",
  messagingSenderId: "504344353730",
  appId: "1:504344353730:web:0a12718dff2b4c1ca5d45b",
  measurementId: "G-1ZN4ZSFK5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);