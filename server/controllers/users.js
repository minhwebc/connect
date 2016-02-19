var moment = require('moment');
moment().format();

module.exports = (function() {
	return {
		login: function(req,res){
			var query = "SELECT * FROM users where email_address = '" + req.body.email + "'AND password = '" + req.body.password + "';"
			connection.query(query, function (err, rows){
				if (err) {
					res.json(err);
				} else {

					if(rows.length == 0){
						res.json({errors: 'Invalid email or password'});
					} else {

						var user = {
							email: rows[0].email_address,
							first_name: rows[0].first_name,
							last_name: rows[0].last_name,
							user_type: rows[0].user_type
						}
						req.session.user = rows[0];
						res.json(user)
					}
				}
			})
		},

		getUser: function(req, res){
			res.json(req.session.user);
		}
	}
})();