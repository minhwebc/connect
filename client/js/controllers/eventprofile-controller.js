app.controller('eventProfileController', function($routeParams, sessionFactory, eventFactory,forumFactory, $location){
	var _this = this;
	eventFactory.getEvent($routeParams.id, function(event){
		console.log(event);
		_this.event = event[0];
		console.log(_this.event);
		eventFactory.getAllParticipants(_this.event.id, function(response){
			_this.event.participants = response;
			console.log(_this.event);
		})
	})

	_this.join = function(){
		eventFactory.join(_this.event.id, function(response){
			eventFactory.getEvent($routeParams.id, function(event){
				console.log(event);
				_this.event = event[0];
				console.log(_this.event);
				eventFactory.getAllParticipants(_this.event.id, function(response){
					_this.event.participants = response;
					console.log(_this.event);
				})
			})
		})
	}

})
