app.controller('forumController', function(sessionFactory, forumFactory, $location){
 	var _this = this;

 	//grab the user to retrieve events and user questions 
 	sessionFactory.getUser(function(user){
 		_this.user = user;
 		console.log(user);
 		forumFactory.getUserQuestions(user, function(questions){
 			_this.questions = questions;
 		})
 	})

 	forumFactory.getCategories(function(categories){
 		_this.categories = categories;
 	})
 	//post is clicked - store question with user into database
	_this.post = function(){
		_this.newPost.author_id = _this.user.id;
		forumFactory.post(_this.newPost, function(data){
			console.log(data);

			/* 
			if this is successful (no errors), then grab all questions
			again (including the new one) and display them to the user
			*/

			if (data) {
				forumFactory.getUserQuestions(user, function(questions){
					_this.questions = questions;
				})
			}
		})
	}

})