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
			var values = {
					name: req.body.name,
					description: req.body.description,
					category_id: req.body.category.id,
					address: req.body.address,
					city: req.body.city,
					state: req.body.state,
					zip: req.body.zip,
					location: req.body.location,
					date: moment(req.body.date).format("YYYY-MM-DD"),
					start_time: moment(req.body.start_time).format("HH:mm:ss"),
					end_time: moment(req.body.end_time).format("HH:mm:ss"),
					creator_id: req.session.user.id,
					created_at: (new Date()), 
					updated_at: (new Date())
				};

			var errors = req.validationErrors(true);

			if (req.body.start_time < new Date()){
				if(!errors){
					errors = {}
				}

				errors.startDate = {
					param: 'startDate',
					msg: 'Start date needs to be in the future',
					value: undefined
				}
			}

			if(req.body.end_time < req.body.start_time){
				if(!errors){
					errors = {}
				}

				errors.endDate = {
					param: 'endDate',
					msg: 'End time must be after start time',
					value: undefined
				}
			}

			if(errors){

				res.json(errors);

			} else {
				connection.query('INSERT INTO events SET ?', values, function(err, result) {

					if (err) {

						res.json(err);

					} else {
						event = {
							event_id : result.insertId
						}
						console.log(event);
						res.json(event);
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

		getEvent: function(req, res){
			var query = "SELECT events.id, events.name, categories.name AS event_category, events.start_time, events.end_time, events.date, events.address "
				query += ", users.first_name, users.last_name, events.location, events.description, events.state, events.city, events.zip, events.created_at FROM events "
				query += "left join users on events.creator_id = users.id "
				query += "left join categories on events.category_id = categories.id "
				query += "where events.id = " + req.params.id;
			connection.query(query, function(err, result) {
				if (err) {
					res.json(err);
				} else {			
					res.json(result);
				}
			})
		},

		getParticipants: function(req,res){
			var query = "SELECT * FROM user_events "
				query += "left join users on user_events.user_id = users.id "
				query += "where user_events.event_id = " + req.params.id;

				connection.query(query, function(err, result) {
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
		},

		getCategories: function(req, res){
			connection.query('SELECT * FROM CATEGORIES', function(err, result) {
				if (err) {
					res.json(err);
				} else {			
					res.json(result);
				}
			})
		}

	}
})();