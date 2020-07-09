const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users.js");
const toyRoutes = require("./toys.js");
const toySearchRoutes = require("./searchfunction");
// API Routes
router.use(userRoutes);
router.use(toyRoutes);
router.use(toySearchRoutes);
// If no API routes are hit, send the React app
// router.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
