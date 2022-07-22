// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive


import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA42NYkqh7cyQFZjnBkBn_fTBvlaLjg8NI",
  authDomain: "safdarkhan-a1234.firebaseapp.com",
  databaseURL: "https://safdarkhan-a1234.firebaseio.com",
  projectId: "safdarkhan-a1234",
  storageBucket: "safdarkhan-a1234.appspot.com",
  messagingSenderId: "142849868715",
  appId: "1:142849868715:web:5ece4f3bb379122ae848ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BAaw8eTHrpgYg7b8qYzNQlI8zIWSEKc-kN6TePazCDSkiSAiExahzFHYAGVVQxxMQMNQxBu9ujqaxXK-LgIAbqw` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // onMessageListener()
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {  
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });


  
