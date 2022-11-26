function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   });});}
getData();
var firebaseConfig = {
    apiKey: "AIzaSyDmEcxTvu_smRQqPGo0YeDxb_IcO0vW8fk",
    authDomain: "kwitter-d4a29.firebaseapp.com",
    databaseURL: "https://kwitter-d4a29-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4a29",
    storageBucket: "kwitter-d4a29.appspot.com",
    messagingSenderId: "502812008183",
    appId: "1:502812008183:web:c4ad4dd7ac621a1bfe7df2"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(Room_names).update({
      purpose : "adding room"
    });

  }