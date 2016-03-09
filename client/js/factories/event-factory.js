app.factory('eventFactory', function($http){
	var factory = {};

	factory.create = function(event, callback){
		$http.post('/createEvent', event).success(function(response){
			callback(response);
		});
	}
	factory.getLocation = function(address, callback){
			console.log(address);
			$http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address + '&key=AIzaSyBdXLmCUxcPmbdYR215zW4RoiUhIZlk5TU').success(function(response){
				callback(response);
			});
	}

	factory.getEvents = function(callback){
		$http.get('/getEvents').success(function(events){
			callback(events);
		});
	}

	factory.getEvent = function(eventID, callback){
		$http.get('/getEvent/' + eventID).success(function(event){
			callback(event);
		})
	}
	
	factory.join = function(eventID, callback){
		var event = {
			id: eventID
		}
		$http.post('/joinEvent', event).success(function(response){
			callback(response);
		})
	}

	factory.getAllParticipants = function(eventID, callback){
		$http.get('/getParticipants/'+eventID).success(function(participants){
			callback(participants);
		})
	}

	return factory;
})



