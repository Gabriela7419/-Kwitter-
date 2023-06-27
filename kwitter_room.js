const firebaseConfig = {
    apiKey: "AIzaSyAyQ1wcqtpVT3DrbUCAt2TvFlTDbQS9dlY",
    authDomain: "kwitter-71ab9.firebaseapp.com",
    databaseURL: "https://kwitter-71ab9-default-rtdb.firebaseio.com",
    projectId: "kwitter-71ab9",
    storageBucket: "kwitter-71ab9.appspot.com",
    messagingSenderId: "106630864646",
    appId: "1:106630864646:web:921fb2ca5dd8353f8ac887"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
  
document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da Sala - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
