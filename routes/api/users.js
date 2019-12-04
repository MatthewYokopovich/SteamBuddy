const router = require("express").Router();
const db = require("../../models");

router.route("/find").post((req, res)=>{
    console.log(req.body.id.steamId);
    db.User.find({
        steamId: req.body.id.steamId
    }).then(dbUser=> res.json(dbUser));
});
router.route("/create").put((req, res)=>{
    console.log(req.body);
    db.User.create(req.body.user).then(dbUser => res.json(dbUser));
});
router.route("/update").post((req, res)=>{
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel));
});

module.exports = router;