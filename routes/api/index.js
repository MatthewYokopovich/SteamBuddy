const router = require("express").Router();
const steamRoutes = require("./steam");
const userRoutes = require("./users");
const commentRoutes = require("./comments");

router.use("/steam", steamRoutes);
router.use("/user", userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
