const router = require("express").Router();
const db = require("../../models");

router.route("/find").post((req, res)=>{
    db.User.find({
        steamId: req.body.steamId
    }).then(dbUser=> res.json(dbUser));
});
router.route("/create").put((req, res)=>{
    db.User.create(req.body).then(dbUser => res.json(dbUser));
});
router.route("/update").post((req, res)=>{
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel));
});

module.exports = router;