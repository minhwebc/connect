var db = require('mysql');
connection = db.createConnection({

	host: "localhost",
	port : 3306,
	user: "root",
	password: "root",
	database: "side-app",
	multipleStatements: true
  
});