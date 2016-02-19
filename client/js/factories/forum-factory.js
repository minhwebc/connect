app.factory('forumFactory', function($http){
	var factory = {};

	factory.askQuestion = function(newQuestion, callback){
		$http.post('/addQuestion', newQuestion).success(function(user){
			callback(user);
		});
	}

	factory.getUserQuestions = function(user, callback){
		$http.get('/getQuestions', user).success(function(questions){
			callback(questions);
		});
	}

	return factory;
})