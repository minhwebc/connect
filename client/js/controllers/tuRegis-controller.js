app.controller('tuRegisController', function(sessionFactory, loginFactory, $location){
 	var _this = this;
 
	// sessionFactory.getUser(function(currentUser){
	// 	if(currentUser) {
	// 		_this.currentUserData = currentUser;
	// 	} else {
	// 		$location.path('/')
	// 	}
	// })
	_this.regTutor = function(){
		loginFactory.regiTutor(_this.newTutor, function(response){
			console.log(response);
		});
	}
	_this.editPassword = function(data){
		sessionFactory.editPassword(data, function(password){
			$location.path('/')
		})
	}
})