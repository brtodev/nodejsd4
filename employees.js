const fs = require("fs");
fs.writeFile(
	"employees.json",
	'{name: "Employee 1 Name", salary: 2000}',
	"utf-8",
	err => {
		if (err) throw err;
		console.log("The file has been saved!");
	}
);
fs.readFile("employees.json", "utf-8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
fs.appendFile("employees.json", " \n guncellendi", "utf-8", err => {
	if (err) throw err;
	console.log("The file has been updated!");
});
fs.unlink("employees.json", err => {
	if (err) throw err;
	console.log("The file has been deleted!");
});
