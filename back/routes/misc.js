const express = require("express");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../conf");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

// HomePage

router.get("/", async (req, res) => {
	try {
		const msg = "Welcome to Sophrodyn!";
		res.status(200).send(msg);
	} catch {
		res.status(500).json("Erreur côté serveur");
	}
});

// Test DB

router.get("/test", async (req, res) => {
	try {
		const [sqlRes] = await db.execute(`SELECT * FROM user`);
		res.status(200).json(sqlRes);
	} catch (e) {
		res.status(500).json(e);
	}
});

// Signup

router.post("/signup", async (req, res) => {
	try {
		const formData = req.body;
		formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
		const [sqlRes] = await db.query(`INSERT INTO user SET ?`, formData);
		delete formData.password;
		formData.id = sqlRes.insertId;
		const token = jwt.sign(formData, jwt_secret);
		res.status(201).json({ user: formData, token });
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
});

// Profile

router.get("/user/:id", async (req, res) => {
	try {
		const [sqlRes] = await db.execute(`SELECT * FROM user WHERE id=?`, [
			req.params.id,
		]);
		res.status(200).json(sqlRes);
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
