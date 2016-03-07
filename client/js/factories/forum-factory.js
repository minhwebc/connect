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

	factory.getAllCommentsOfOne = function(post, callback){
		$http.post('/getComments', post).success(function(comments){
			callback(comments);
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

	factory.getPost = function(postID, callback){
		$http.get('/getPost/'+ postID).success(function(post){
			callback(post);
		});
	}

	factory.getPostsByUser = function(authorID, callback){
		$http.get('/getPostsByUser/' + authorID).success(function(posts){
			callback(posts);
		})
	}

	factory.getPostsByOneUser = function(authorID, index, callback){
		$http.get('/getPostsByUser/' + authorID).success(function(posts){
			callback(posts, index);
		})
	}

	factory.postComment = function(newComment, callback){
		$http.post('/postComment', newComment).success(function(result){
			callback(result);
		})
	}
	return factory;
})