const firebaseConfig = {
  apiKey: "AIzaSyBqZCkGl6W-6lkktpGugGxdaLkGsgEb_uU",
  authDomain: "wdd330-d3cf6.firebaseapp.com",
  databaseURL: "https://wdd330-d3cf6.firebaseio.com",
  projectId: "wdd330-d3cf6",
  storageBucket: "wdd330-d3cf6.appspot.com",
  messagingSenderId: "476125933283",
  appId: "1:476125933283:web:be55732ba8fff4a25d5fd6",
  measurementId: "G-PRF6HCSG7T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();
