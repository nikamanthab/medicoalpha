var bodyparser = require("body-parser");



function router(bundle) {

    let app = bundle.app;

    let firebase = bundle.firebase;

    let db = firebase.firestore();

    app.use(bodyparser.json());

    app.use(bodyparser.urlencoded({
        extended: true
    }));


    app.post("/registerusers", (req, res) => {
        db.collection("users").doc(req.body.uid).set(req.body).then(success.bind(null, res));
    });

    app.post("/editpharmacy", (req, res) => {
        db.collection("pharmacy").doc(req.body.uid).set(req.body, {
            merge: true
        }).then(success.bind(null, res));
    });

    app.post("/registerpharmacy", (req, res) => {
        db.collection("pharmacy").doc(req.body.uid).set(req.body).then(success.bind(null, res));
    });

    app.get("/getpharmacy", (req, res) => {
        console.log(req.body.uid);
        db.collection("pharmacy").doc(req.body.uid).get().then(success.bind(null, res));
    });


    app.get("/loadmedicine", (req, res) => {
        let count = req.body.medicines.length;

        db.collection("pharmacy").doc(req.body.uid).update({
            medicines: firebase.firestore.FieldValue.arrayUnion(...req.body.medicines),
            count: firebase.firestore.FieldValue.increment(count)
        }).then(success.bind(null, res));

    })

};

function success(a, b) {
    var result="done";
    if(b){
        result = b.data();
    }
    a.send(result);
}



module.exports = router;