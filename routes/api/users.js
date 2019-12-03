const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/find").post(userController.findUser);
router.route("/create").put(userController.createUser);
router.route("/update").post(userController.updateUser);

module.exports = router;