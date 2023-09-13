const express = require("express");
const router = express.Router();
const { checkUser } = require("../controllers/userController");

router.get("/checkUser", checkUser);

module.exports = router;
