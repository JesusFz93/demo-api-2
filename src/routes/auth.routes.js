const { Router } = require("express");
const { registerUser, login } = require("../controllers/auth.controller");

const router = Router();

router.post("/", registerUser);
router.post("/login", login);

module.exports = router;
