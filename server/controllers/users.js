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
		},

		getAllQuestions: function(req, res){
			var query = "SELECT * FROM posts ";
			query += "join users on users.id = posts.author_id ";
			query += "join comments on comments.post_id = posts.id ";

			connection.query(query, function (err, rows){
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			})
		},

		getComments: function(req, res){
			var query = "SELECT * from comments ";
			query += "join users on users.id = comments.user_id ";
			query += "where comments.post_id = " + req.body.id;
			connection.query(query, function (err, rows){
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			})
		},

		getQuestions: function(req,res){
			var query = "SELECT * FROM posts ";
			query += "join comments on comments.post_id = posts.id ";
			query += "join users on users.id = comments.user_id ";
			query += "where users.id = " + req.session.user.id;

			connection.query(query, function (err, rows){
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			})
		},

		addQuestion: function(req, res){
			var values = {
				category_id: req.body.category.id,
				content: req.body.content,
				author_id: req.body.author_id,
				created_at: (new Date()).toISOString().substring(0, 19).replace('T', ' '), 
				updated_at: (new Date()).toISOString().substring(0, 19).replace('T', ' ')
			}

			var query = "insert into posts set ?";
			connection.query(query, values, function(err, result) {
				if(err){
					res.json(err);
				} else {
					res.json(result);
				}
			});
		}
	}
})();