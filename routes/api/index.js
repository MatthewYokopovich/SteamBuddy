const router = require("express").Router();
const steamRoutes = require("./steam");

router.use("/steam", steamRoutes);

module.exports = router;
