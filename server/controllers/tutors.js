var moment = require('moment');
moment().format();

module.exports = (function() {
	return {
		contact: function(req,res){
			res.json('hii');
		},

		registerTutor: function(req, res) {
			req.assert('email', 'Invalid email given').notEmpty().isEmail();
			//req.assert('password', 'Password must be between 6 and 20 characters').len(6, 20);
			req.assert('cpassword', 'Passwords do not match').equals(req.body.password);
			req.assert('first_name', 'Valid first name is required').notEmpty().isAlpha();
			req.assert('last_name', 'Valid last name is required').notEmpty().isAlpha();
			req.assert('gender', 'Gender is required').notEmpty().isAlpha();
			req.assert('address1', 'Address is required').notEmpty();
			req.assert('city', 'City is required').notEmpty();
			req.assert('state', 'State is required').notEmpty();
			req.assert('zip', 'Valid zip code required').isNumeric().len(5);
			var errors = req.validationErrors(true);
			if (errors){ 
				res.json(errors);
			}else{
				var values = {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email_address: req.body.email, 
					gender: req.body.gender,
					password: req.body.password, 
					address1: req.body.address1,
					address2: req.body.address2,
					city: req.body.city,
					state: req.body.state, 
					zip: req.body.zip,
					user_type: 2,
					created_at: (new Date()).toISOString().substring(0, 19).replace('T', ' '), 
					updated_at: (new Date()).toISOString().substring(0, 19).replace('T', ' ')
				};
				connection.query('INSERT INTO users SET ?', values, function(err, result) {

					if (err) {

						res.json(err);

					} else {
						
						res.json(result);

					}
				});
			}
		}
	}
})();