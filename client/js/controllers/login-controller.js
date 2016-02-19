app.controller('loginController', function($location) {
	var _this = this;

	this.redirect = function(currentUser){
		if (currentUser) {
			if (currentUser.user_level == 9) {
				$location.path('/admin/dashboard')
			} else {
				$location.path('/dashboard')
			}
		} else {
			$location.path('/')
		}
	}

	this.login = function(){
		$location.path('/dashboard')
	}

});