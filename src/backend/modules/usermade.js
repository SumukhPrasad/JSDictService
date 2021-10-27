function defineWord(dict, word) {
	try {
		const dictionary = require("../assets/UserDictionaryFiles/" + dict + ".json");
		return "{\"definition\": \""+dictionary[word]+"\"}" || "{\"error\": \"wordnotfound\"}";
	} catch {
		return "{\"error\": \"notfound\"}";
	}
}

module.exports = {defineWord};