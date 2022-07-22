// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js')


if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("../firebase-messageing.sw.js")
  .then(function(registration){
    console.log("REGUSTRATION SUCCEFULLY",registration.scope)
  }).catch(function(err){
    console.log("REGUSTRATION fail",err)

  })
}


firebase.initializeApp({
  messagingSenderId: "142849868715",

})
const iniitMessaging = firebase.messaging()
// firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// const messaging = firebase.messaging();

