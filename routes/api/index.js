const router = require("express").Router();
const steamRoutes = require("./steam");
const userRoutes = require("./users");

router.use("/steam", steamRoutes);
router.use("/user", userRoutes);

module.exports = router;
