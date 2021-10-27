const dictionary = require("../assets/webster/dict.json");

function defineWord(word) {
	return "{\"definition\": \""+dictionary[word]+"\"}" || "{\"error\": \"notfound\"}";
}

module.exports = { defineWord };