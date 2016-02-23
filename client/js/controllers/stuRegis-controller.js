app.controller('stuRegisController', function(sessionFactory, loginFactory, $location){
 	var _this = this;
 
	// sessionFactory.getUser(function(currentUser){
	// 	if(currentUser) {
	// 		_this.currentUserData = currentUser;
	// 	} else {
	// 		$location.path('/')
	// 	}
	// })
	_this.regStudent = function(){
		loginFactory.regiStudent(_this.newStudent, function(response){
			$location.path('/login')
		});
	}
	_this.editPassword = function(data){
		sessionFactory.editPassword(data, function(password){
			$location.path('/')
		})
	}
})