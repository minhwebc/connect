app.controller('loginController', function(sessionFactory, userFactory, $location) {
	var _this = this;

	// sessionFactory.getErrors(function(response){
	// 	_this.sessionErrors = response;
	// });

	// sessionFactory.getLogOutMessage(function(response){
	// 	_this.logoutMessage = response;
	// });

	// sessionFactory.getUser(function(currentUser){
	// 	if (currentUser) {
	// 		if (currentUser.user_level == 9) {
	// 			$location.path('/admin/dashboard')
	// 		} else {
	// 			$location.path('/dashboard')
	// 		}
	// 	} 
	// });

	_this.login = function(){
		userFactory.authenticate(_this.user, function(sessionUser){
			if(sessionUser.errors != undefined){
				// _this.sessionErrors = sessionUser.errors;
				console.log('error');
			} else {	
				$location.path('/forum');
			}
		});
	}

	_this.currentUser = {};
});