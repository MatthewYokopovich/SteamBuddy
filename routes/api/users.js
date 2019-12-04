const router = require("express").Router();
const db = require("../../models");

router.route("/find").post((req, res)=>{
    console.log(req.body.id.steamId);
    db.User.find({
        steamId: req.body.id.steamId
    }).then(dbUser=> res.json(dbUser));
});
router.route("/create").put((req, res)=>{
    console.log(req.body.user);
    db.User.create(req.body.user).then(dbUser => res.json(dbUser));
});
router.route("/update").post((req, res)=>{
    console.log(req.body);
    db.User.findOneAndUpdate({ steamId: req.body.steamId}, {
        $set: {
            favorites: req.body.favorites
        }},{new: true}, function(err, doc){
            if (err) throw err;
            res.json(doc);
    })
});

module.exports = router;