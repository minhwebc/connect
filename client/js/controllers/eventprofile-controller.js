app.controller('eventProfileController', function($routeParams, sessionFactory, eventFactory,forumFactory, $location, uiGmapGoogleMapApi){
	var _this = this;
	uiGmapGoogleMapApi.then(function(maps) {
    });	
	eventFactory.getEvent($routeParams.id, function(event){
		console.log(event);
		_this.event = event[0];
		eventFactory.getLocation(_this.event.address, function(response){
			console.log(response);
			_this.map = { center: { latitude: response.results[0].geometry.location.lat, longitude: response.results[0].geometry.location.lng }, zoom: 14 };
			_this.marker = {
      			id: 0,
      			coords: {
        		latitude: response.results[0].geometry.location.lat,
        		longitude: response.results[0].geometry.location.lng
      			},
      			options: { draggable: true },
      			events: {
			        dragend: function (marker, eventName, args) {
			          $log.log('marker dragend');
			          var lat = marker.getPosition().lat();
			          var lon = marker.getPosition().lng();
			          $log.log(lat);
			          $log.log(lon);
          			}
          		}
      		}
		})
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
