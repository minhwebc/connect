app.controller('forumController', function(sessionFactory, forumFactory, $location){
 	var _this = this;

 	//grab the user to retrieve events and user questions 
 	sessionFactory.getUser(function(user){
 		_this.user = user;
 		forumFactory.getUserQuestions(user, function(questions){
 			_this.questions = questions;
 		})
 	})

 	//post is clicked - store question with user into database
	this.askQuestion = function(){
		_this.question.user = _this.user;
		
		forumFactory.askQuestion(_this.question, function(data){
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