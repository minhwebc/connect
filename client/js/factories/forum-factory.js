app.factory('forumFactory', function($http){
	var factory = {};

	factory.post = function(newPost, callback){
		console.log(newPost);
		$http.post('/addQuestion', newPost).success(function(user){
			callback(user);
		});
	}
	factory.getAllQuestions = function(callback){
		$http.get('/getAllQuestions').success(function(questions){
			callback(questions);
		})
	}

	factory.getAllComments = function(post, index, callback){
		$http.post('/getComments', post).success(function(comments){
			callback(comments, index);
		})
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