const fs = require("fs");
const chalk = require("chalk");
const dict = "";
var data = fs.readFileSync(__dirname + "/../assets/AppleDictionaryFiles/XML/"+dict+".xml", {encoding:"utf8", flag:"r"});
data = data.split("\n");
var JSONDict = {};
for (let i = 0; i < data.length; i++) {
	var element = data[i];
	var regex = /<d:entry xmlns:d="http:\/\/www\.apple\.com\/DTDs\/DictionaryService-1\.0\.rng" id="(.*?)" d:title="(.*?)" class="entry">(.*?)<\/d:entry>/;
     
	console.log(chalk.bold.green("[PROCESSING] " + i + ", " + (data.length - i) + " left... | Word: ")+element.match(regex)[2]);
	JSONDict[element.match(regex)[2].toString()] = element.match(regex)[3];
}
console.log(chalk.bold.bgGreen("[WRITING FILE]"));
fs.writeFileSync(__dirname + "/../assets/AppleDictionaryFiles/JSON/"+dict+".json", JSON.stringify(JSONDict));