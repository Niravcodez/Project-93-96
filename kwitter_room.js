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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding rooms"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name" + Room_names);
      row = "<div class = 'room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}