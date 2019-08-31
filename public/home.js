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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (authdata) {
      if (authdata) {
          init();
          return;
      } else {
          console.log("Signed out");
      }

  });

  function init() {

      axios.get('/getpharmacy', {
          params: {
              uid: firebase.auth().currentUser.uid
          }
      }).then((res) => {
          if (res.data != false) {
              sel("#cols").classList.remove("hide");
              sel("#loadify").classList.remove("hide");
              sel("#name").value = res.data.name;
              sel("#addr").value = res.data.address;
              sel("#latlng").value = res.data.latlng;
          }
      })

      sel("form").addEventListener("submit", (e) => {
          e.preventDefault();
          let name = sel("#name").value;
          let address = sel("#addr").value;
          let latlng = sel("#latlng").value;
          let uid = firebase.auth().currentUser.uid;

          axios.post('/registerpharmacy', {
                  name,
                  address,
                  latlng,
                  uid
              })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });
      });

      sel("#loadbtn").addEventListener("click", (e) => {
          e.preventDefault();
          let all = sel("#dinfo").value.split(",");
          let items = all.map(x => {
              let obj = {};
              let splited = x.split("-");
              obj.name = splited[0];
              obj.price = splited[1];
              obj.count = splited[2];
              obj.uid = firebase.auth().currentUser.uid;
              return obj;
          });
          console.log(items);

          axios.post('/loadmedicine', {
                  items: items
              })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });

      });

      sel("#uploadbtn").addEventListener("click", (e) => {
          e.preventDefault();
          let all = sel("#dinfo").value.split("-");
        

          axios.post('/updatecount', {
                  name:all[0],
                  count:all[1],
                  uid:firebase.auth().currentUser.uid
              })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });

      });
  }





  function sel(d) {
      return document.querySelector(d);
  }