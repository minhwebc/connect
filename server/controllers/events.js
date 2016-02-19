var moment = require('moment');
moment().format();

module.exports = (function() {
	return {
		createEvent: function(req,res){
			req.assert('name', 'Name required').notEmpty();
			req.assert('description', 'Description required').notEmpty();
			req.assert('address', 'Address is required').notEmpty();
			req.assert('city', 'City is required').notEmpty();
			req.assert('state', 'State is required').notEmpty();
			req.assert('zip', 'Valid zip code required').isNumeric().len(5);
			var errors = req.validationErrors(true);
			if (errors){ 
				res.json(errors);
			}else{
				var values = {
					name: req.body.name,
					description: req.body.description,
					address: req.body.address,
					city: req.body.city,
					state: req.body.state,
					zip: req.body.zip,
					creator_id: req.session.user.id,
					created_at: (new Date()).toISOString().substring(0, 19).replace('T', ' '), 
					updated_at: (new Date()).toISOString().substring(0, 19).replace('T', ' ')
				};
				connection.query('INSERT INTO events SET ?', values, function(err, result) {

					if (err) {

						res.json(err);

					} else {
						
						res.json(result);

					}
				})
			}
		},

		getEvents: function(req, res){
			connection.query('SELECT * FROM events', function(err, result) {
				if (err) {
					res.json(err);
				} else {			
					res.json(result);
				}
			})
		},

		join: function(req, res){
			var values = {
				event_id: req.body.id,
				user_id: req.session.user.id
			}
			connection.query('INSERT INTO user_events SET ?', values, function(err, result) {
				if (err) {
					res.json(err);
				} else {			
					res.json(result);
				}
			})
		}

	}
})();