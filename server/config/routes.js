var students = require('./../controllers/students.js');
var tutors = require('./../controllers/tutors.js');
var users = require('./../controllers/users.js');
var events = require('./../controllers/events.js');

module.exports = function(app) {
	app.post('/joinEvent', events.join);

	app.post('/registudent', students.registerStudent);
	
	app.post('/registutor', tutors.registerTutor);

	app.post('/authenticateUser', users.login);

	app.get('/checkSession', users.getUser);

	app.post('/addQuestion', users.addQuestion);

	app.get('/getQuestions', users.getQuestions);


	// app.get('/contact', shifts.contact);
	// app.get('/allEmployees', employees.allEmployees);

	app.post('/createEvent', events.createEvent);

	app.get('/getEvents', events.getEvents);

	// app.delete('/deleteEmployee/:id', employees.deleteEmployee);

	// app.post('/editEmployee', employees.editEmployee);

	// app.post('/addEmployee', employees.addEmployee);

	// app.post('/addShift', shifts.addShift);

	// app.post('/authenticateUser', employees.login);

	// app.post('/addLocation', locations.addLocation);

	// app.post('/authenticateAdmin', admins.login);

	// app.get('/destroySession', function(req, res){
	// 	req.session.destroy();
	// 	res.json(true);
	// });

	// app.get('/checkSession', employees.retrieveUser);

	// app.get('/getMySchedule/:id', shifts.employeeShift);

	// app.get('/getLocations', locations.getLocations);

	// app.get('/getCategories', shifts.getCategories);

	// // app.get('/availability/:id', function(req, res){
	// // 	console.log(req.params.id);
	// // });
	
	// app.get('/getAllShift', shifts.getAll);

	// app.post('/getAllEmployees', shifts.getAllEmployees);

	// app.post('/assign', shifts.assign);

	// app.post('/unassign', shifts.unassign);
	// app.post('/editPassword', employees.editPassword);

	// // app.post('/getSchedule', function(req,res){
		
	// // })

};