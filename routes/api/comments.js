const router = require("express").Router();
const db = require("../../models");

router.route("/all").get((req, res)=>{
    db.Comment.find({},(err, docs)=>{
        console.log("find called");
        if(!err) res.json(docs);
        else throw err;
    })
});

router.route("/create").put((req, res)=>{
    console.log(req.body.comment);
    db.Comment.create(req.body.comment).then(dbComment => res.json(dbComment));
});

router.route("/findByApp").post((req, res)=>{
    console.log(req.body.appid);
    db.Comment.find({
        appid: req.body.appid
    }).populate("author").then(dbComment => res.json(dbComment));
});

router.route("/delete").delete((req, res)=>{
    console.log(req.body.comment);
    db.Comment.deleteOne({
        _id: req.body.comment
    }).then(dbComment => res.json(dbComment));
})

module.exports = router;