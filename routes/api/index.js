const router = require("express").Router();
const path = require("path");
const booksRoutes = require("./books");
const googleRoutes = require("./google");

router.use("/books", booksRoutes);
router.use("/google", googleRoutes);

module.exports = router;