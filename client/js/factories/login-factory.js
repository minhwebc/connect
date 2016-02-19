app.factory('loginFactory', function($http){
	var factory = {};

	factory.regiStudent = function(newStudent, callback){
		$http.post('/registudent', newStudent).success(function(user){
			callback(user);
		});
	}

	factory.regiTutor = function(newTutor, callback){
		$http.post('/registutor', newTutor).success(function(user){
			callback(user);
		});
	}


	// factory.removeUser = function(id, callback){
	// 	$http.get('/deleteUser/' + id).success(function(){
	// 		callback();
	// 	});
	// }

	// factory.authenticate = function(user, callback){
	// 	$http.post('/authenticateAdmin/', user).success(function(sessionUser){
	// 		callback(sessionUser);
	// 	});
	// }
	return factory;
})