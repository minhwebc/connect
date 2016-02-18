module.exports = (function(app, io) {

	var users = [];
	// (Listener) On Connection (contant)
	io.sockets.on('connection', function(socket) { // on connection
		console.log("Connected - Socket ID: ", socket.id);
		
		// (Listener) On Disconnect (contant)
		socket.on('disconnect', function() { 
			console.log("Disconnected - Socket ID: ", socket.id);
		})

		socket.on('assign', function(){
			io.emit('update_schedule', {response: "Update Your Schedule"})
		})

		socket.on('shift_taken', function(){
			io.emit('update_admin', {response: "Update Your Schedule"})
		})

		socket.on('take_time_off', function(){
			io.emit('update_admin', {response: "Update Your Schedule"})
		})

		// (Action) Emit to Client - Response to Client who emitted 'button_clicked'
		// socket.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all except Client (who emitted 'button_clicked')
		// socket.broadcast.emit('server_response', {response: "Working"}); 
	    
	    // (Action) Broadcast to all including Client (who emitted 'button_clicked') 
		// io.emit('server_response', {response: "Working"});		

	});
})


