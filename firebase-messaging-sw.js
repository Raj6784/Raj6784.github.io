// Import Firebase scripts
/* global importScripts, firebase*/
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeiWELLn3jsN92csltasVrG9N6SV9ULw",
  projectId: "node-fcm-testing",
  messagingSenderId: "887745796405",
  appId: "1:887745796405:web:9e1ac5e0a9309a7cbed47c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();


// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Firebase Notification received in background:", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://raw.githubusercontent.com/Raj5222/Project-Management-System/main/Temp/Icon/Raj-logo.png",
  };

  // Display the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});
