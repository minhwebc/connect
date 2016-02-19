app.factory('userFactory', function($http){
	var factory = {};

	factory.authenticate = function(user, callback){
		$http.post('/authenticateUser', user).success(function(sessionUser){
			callback(sessionUser);
		});
	}

	return factory;
})



