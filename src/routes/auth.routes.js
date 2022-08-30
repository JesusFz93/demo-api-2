const { Router } = require("express");
const { registerUser } = require("../controllers/auth.controller");

const router = Router();

router.post("/", registerUser);

module.exports = router;
