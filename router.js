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


    app.post("/loadmedicine", (req, res) => {
        db.collection("medicines").add(req.body).then(success.bind(null, res));
    });

    app.post("/updatecount", async (req, res) => {
        let medic = await db.collection("medicines").where("uid", "==", req.body.uid).where("name", "==", req.body.name).get();
        medic.forEach((doc)=>{
            db.collection("medicines").doc(doc.id).update({count:req.body.count}).then(()=>{
                res.send("success");
            })
        })
    });

    app.get("/getmedicine",async (req,res)=>{
        let result=[];
        let snapshots=await db.collection("medicines").where("uid","==",req.body.uid).get();
        snapshots.forEach((doc)=>{
            result.push(doc.data());
        });
        res.json(result);
    });

    app.get("/search",(req,res)=>{
        let data=req.body.input;
        let result=[];

            let snapshots=await db.collection("medicines").where("name","==",data).get();

            snapshots.forEach((doc)=>{
               let med=doc.data();
               db.collection("pharmacy").doc(med.uid).get().then
            });
           
     
    });


};

function success(a, b) {
    var result = "done";
    if (b) {
        result = b.data();
    }
    a.send(result);
}



module.exports = router;