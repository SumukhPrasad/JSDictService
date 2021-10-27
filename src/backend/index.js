const express = require("express");
const app = express();
const port = 3000;
const webster = require("./modules/default.js");
const apple = require("./modules/apple.js");
const user = require("./modules/usermade.js");

// sets default headers on all requests
app.all("/*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");
	res.contentType("text/plain");
	next();
});

app.get("/default/:word", (req, res) => {
	res.send(webster.defineWord(req.params.word));
});

app.get("/apple/:dict/:word", (req, res) => {
	res.send(apple.defineWord(req.params.dict, req.params.word));
});

app.get("/user/:dict/:word", (req, res) => {
	res.send(user.defineWord(req.params.dict, req.params.word));
});

app.listen(port, () => {
	console.log(`JSDictService is listening at http://localhost:${port}!`);
});