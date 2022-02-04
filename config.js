import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfBcS5vIahSs6eDMXlqSj5GvXJslVCWw0",
  authDomain: "school-attendance-app-55b9d.firebaseapp.com",
  databaseURL: "https://school-attendance-app-55b9d-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-55b9d",
  storageBucket: "school-attendance-app-55b9d.appspot.com",
  messagingSenderId: "764608938370",
  appId: "1:764608938370:web:5c2e4f883aa1b7376ecf9b"
};
//initialize your database

firebase.initializeApp(firebaseConfig)


export default firebase.database()