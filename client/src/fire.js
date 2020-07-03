import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA4q6GUXTAGoXULYNZllsgb7HdPd2aPxyk",
  authDomain: "toytrader-fc4a1.firebaseapp.com",
  databaseURL: "https://toytrader-fc4a1.firebaseio.com",
  projectId: "toytrader-fc4a1",
  storageBucket: "toytrader-fc4a1.appspot.com",
  messagingSenderId: "727492910264",
  appId: "1:727492910264:web:e12cf344c36937c612a84d",
  measurementId: "G-D845TZL28L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;