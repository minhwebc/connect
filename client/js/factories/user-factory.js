app.factory('userFactory', function($http){
	var factory = {};

	factory.authenticate = function(user, callback){
		$http.post('/authenticateUser', user).success(function(sessionUser){
			callback(sessionUser);
		});
	}

	factory.getUser = function(userID, callback){
		$http.get('/getUserInfo/'+userID).success(function(userInfo){
			callback(userInfo);
		})
	}
	return factory;
})



