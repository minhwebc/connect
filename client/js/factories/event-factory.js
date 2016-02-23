app.factory('eventFactory', function($http){
	var factory = {};

	factory.create = function(event, callback){
		$http.post('/createEvent', event).success(function(response){
			callback(response);
		});
	}

	factory.getEvents = function(callback){
		$http.get('/getEvents').success(function(events){
			callback(events);
		});
	}

	factory.join = function(eventID, callback){
		var event = {
			id: eventID
		}
		$http.post('/joinEvent', event).success(function(response){
			callback(response);
		})
	}

	return factory;
})


