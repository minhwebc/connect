app.controller('eventShowController', function(sessionFactory, eventFactory,forumFactory, $location, $mdDialog, eventID){
	var _this = this;
	_this.answer = function(answer) {
    	$mdDialog.hide(answer);
  	};
	if(eventID){
		eventFactory.getEvent(eventID, function(event){
			console.log(event);
			_this.event = event[0];
			console.log(_this.event);
			eventFactory.getAllParticipants(_this.event.id, function(response){
				_this.event.participants = response;
				console.log(_this.event);
			})
		})
	}
})
