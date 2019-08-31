  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAyrvDkdNJ9rkx_qi6e5qjM7rFaQZCJpKs",
      authDomain: "medicoalpha-ebc77.firebaseapp.com",
      databaseURL: "https://medicoalpha-ebc77.firebaseio.com",
      projectId: "medicoalpha-ebc77",
      storageBucket: "medicoalpha-ebc77.appspot.com",
      messagingSenderId: "112699513342",
      appId: "1:112699513342:web:9f6952cc53c9b144"
  };

  var signedUp = false;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().onAuthStateChanged(function (authdata) {
      if (authdata && (!signedUp)) {
          window.open("home.html", "_self");
          return;
      } else {
          console.log("Signed out");
      }

  });

  sel("button").addEventListener("click", () => {
      signedUp = true;

      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(function () {
              return firebase.auth().signInWithPopup(provider);
          }).then(function (result) {
              var token = result.credential.accessToken;
              var user = result.user;
              console.log("signedin");
              return firebase.firestore().collection("users").doc(user.uid).set({
                  name: user.displayName,
                  photo: user.photoURL})
          }).then(() => {
              window.open("home.html", "_self");
          }).catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);
          });


  })




  function sel(d) {
      return document.querySelector(d);
  }