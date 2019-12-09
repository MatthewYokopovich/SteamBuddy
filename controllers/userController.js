const db = require("../models");

module.exports = {
    findUser: function(req, res){
        db.User.find(req.steamId).then(dbUser=> res.json(dbUser));
    },
    createUser: function(req, res){
        db.User.create(req.body).then(dbUser => res.json(dbUser));
    },
    updateUser: function(req, res){
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel));
    }
};