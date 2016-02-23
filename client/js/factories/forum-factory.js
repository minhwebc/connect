app.factory('forumFactory', function($http){
	var factory = {};

	factory.post = function(newPost, callback){
		console.log(newPost);
		$http.post('/addQuestion', newPost).success(function(user){
			callback(user);
		});
	}

	factory.getCategories = function(callback){
		$http.get('/getCategories').success(function(categories){
			callback(categories);
		});
	}

	factory.getUserQuestions = function(user, callback){
		$http.get('/getQuestions', user).success(function(questions){
			callback(questions);
		});
	}

	return factory;
})