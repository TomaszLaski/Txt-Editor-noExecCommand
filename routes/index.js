var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.post("/note", function (req, res) {
	let data = JSON.stringify(req.body);
	fs.writeFileSync("note.json", data);
	res.json({ result: "OK" });
});

router.get("/note", function (req, res) {
	let rawdata = fs.readFileSync("note.json");
	let note = JSON.parse(rawdata);
	res.json(note);
});
module.exports = router;
