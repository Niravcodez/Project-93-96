var firebaseConfig = {
      apiKey: "AIzaSyANRIit8a31jtMYM7OWzQez9iHDIaP--J4",
      authDomain: "kwitter-8326a.firebaseapp.com",
      databaseURL: "https://kwitter-8326a-default-rtdb.firebaseio.com",
      projectId: "kwitter-8326a",
      storageBucket: "kwitter-8326a.appspot.com",
      messagingSenderId: "555311476059",
      appId: "1:555311476059:web:5fd3f4e0ea84c8be4bfe7e"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
