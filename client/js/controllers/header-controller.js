app.controller('HeaderController', function($scope, $location){
	function HeaderController($scope, $location) 
	{ 
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
})