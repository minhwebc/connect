app.controller('welcomeController', function(sessionFactory, $location, $scope){
 	var _this = this;
	// sessionFactory.getUser(function(currentUser){
	// 	if(currentUser) {
	// 		_this.currentUserData = currentUser;
	// 	} else {
	// 		$location.path('/')
	// 	}
	// })
	_this.times = 0;
	_this.clickButton = function(){
		_this.times += 1;
		sessionFactory.contactSever(function(){
			console.log("got back from the sever");
		})
	}

})