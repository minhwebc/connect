app.controller('tutorController', function(sessionFactory, $location){
 	var _this = this;
 	sessionFactory.getUser(function(currentUser){
		if(currentUser) {
			_this.currentUserData = currentUser;
			console.log(currentUser);
		} else {
			$location.path('/')
		}
	})
})