const express = require("express");
const passport = require("passport");
const router = express.Router();
const { jwt_secret } = require("../conf");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

// Test Protection

router.get("/protected", passport.authenticate("jwt"), (req, res) => {
	const msg =
		"If you can see this, you should be logged in, " + req.user.firstname;
	res.status(200).send(msg);
});

// Signin

router.post("/signin", passport.authenticate("local"), async (req, res) => {
	try {
		const token = jwt.sign(req.user, jwt_secret);
		res.status(200).json({ user: req.user, token });
	} catch (e) {
		console.log(e);
		res.status(500).send("Erreur serveur");
	}
});

module.exports = router;
