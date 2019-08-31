var bodyparser = require("body-parser");

function router(bundle) {

    let app = bundle.app;

    let firebase = bundle.firebase;

    let db = firebase.firestore();




    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());






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
        db.collection("pharmacy").doc(req.query.uid).get().then(success.bind(null, res));
    });


    app.post("/loadmedicine", (req, res) => {
        var batch = db.batch();
        console.log(req.body.items);
        let payload=req.body.items;
        payload.forEach((x)=>{
            batch.set(db.collection("medicines").doc(),x);
        });
        batch.commit().then(()=>{
           res.send("successfully added");
        });
    });

    

    app.post("/updatecount", async (req, res) => {
        let medic = await db.collection("medicines").where("uid", "==", req.body.uid).where("name", "==", req.body.name).get();
        medic.forEach((doc) => {
            db.collection("medicines").doc(doc.id).update({
                count: req.body.count
            }).then(() => {
                res.send("success");
            })
        });
    });

    app.get("/getmedicine", async (req, res) => {
        let result = [];
        let snapshots = await db.collection("medicines").where("uid", "==", req.body.uid).get();
        snapshots.forEach((doc) => {
            result.push(doc.data());
        });
        res.json(result);
    });

    app.post("/search", async (req, res) => {
        let data = req.body.input;
        let obj = {};
        let result = [];

        let snapshots=await db.collection("medicines").where("name", "==", data).get();
      
            for (doc of snapshots.docs) {
                let med = doc.data();
                if (med.count == 0) {
                    continue;
                };
                let master=(await db.collection("pharmacy").doc(med.uid).get()).data();
                master.med = med;
                result.push(master);
            }
            obj[req.body.input] = result;
            res.json(obj);
        });

};

function success(a, b) {
    var result = "done";
    if(b){
    if (Boolean(b.data())) {
        result = b.data();
    }
}

    a.send(result);
}



module.exports = router;