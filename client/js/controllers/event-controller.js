app.controller('eventController', function(sessionFactory, eventFactory, $location){
 	var _this = this;
	_this.createEvent = function(){
		eventFactory.create(_this.newEvent ,function(response){
			console.log(response);
		})
	}
})