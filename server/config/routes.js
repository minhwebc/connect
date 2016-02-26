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
	
	app.post('/getComments', users.getComments);

	app.post('/postComment', users.postComments);

	app.get('/getAllQuestions', users.getAllQuestions);

	app.get('/getQuestions', users.getQuestions);

	app.get('/getPost/:id', users.getPost);

	app.get('/getEvent/:id',  events.getEvent);
	
	app.get('/getPostsByUser/:id', users.getAllPostsbyUser)

	app.get('/getCategories', events.getCategories);

	app.post('/createEvent', events.createEvent);

	app.get('/getEvents', events.getEvents);

	app.get('/getParticipants/:id', events.getParticipants);

};