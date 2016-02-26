app.controller('eventController', function(sessionFactory, eventFactory, forumFactory, $location){
 	var _this = this;
 	forumFactory.getCategories(function(categories){
 		_this.categories = categories;
 	})

	_this.createEvent = function(){
		console.log(_this.newEvent);
		eventFactory.create(_this.newEvent ,function(response){
			if(Number.isInteger(response.event_id)){
				console.log(response.event_id);
				$location.path('/event/' + response.event_id);
			}
			console.log(response);
			_this.errors = response;
		})
	}
})