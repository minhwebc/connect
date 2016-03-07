app.controller('forumController', function(sessionFactory, forumFactory, eventFactory, $location, $mdDialog, $mdMedia){
 	var _this = this;
 	
 	//grab the user to retrieve events and user questions 
 	sessionFactory.getUser(function(user){
 		_this.user = user;
 		// forumFactory.getUserQuestions(user, function(questions){
 		// 	_this.questions = questions;
 		// })
 	})
 	eventFactory.getEvents(function(events){
 		_this.events = events;
 		console.log(_this.events);
 	})

 	//get all posts and their comments
 	forumFactory.getAllQuestions(function(questions){
 		_this.posts = questions;
 		console.log(questions);
 		for(var i = 0; i < _this.posts.length; i++){
 			forumFactory.getAllComments(_this.posts[i], i, function(comments, index){
 				_this.posts[index].comments = comments;
 			})
 		}
 		console.log(_this.posts);
 	})

 	_this.locate = function(eventID){
 		$location.path('/event/'+eventID);
 	}
 	//grab all the categories available
 	forumFactory.getCategories(function(categories){
 		_this.categories = categories;
 	})

 	_this.showTabDialog = function(ev) {
	    $mdDialog.show({
	      templateUrl: 'partials/eventprofileshow.html',
	      controller: 'eventShowController',
	      controllerAs: 'eventShCtrl',
	      parent: angular.element(document.body),
	      targetEvent: 1,
	      locals : {
            eventID : ev
          },
	      clickOutsideToClose:true
	    })
	     .then(function(answer) {
	     	if(answer == 1){
          		$location.path('/event/' + ev);
          	}else{
          		console.log('back');
          	}
        });
	};
 	//post is clicked - store question with user into database
	_this.post = function(){
		_this.newPost.author_id = _this.user.id;
		forumFactory.post(_this.newPost, function(data){
			console.log(data);

			forumFactory.getAllQuestions(function(questions){
		 		_this.posts = questions;
		 		console.log(questions);
		 		for(var i = 0; i < _this.posts.length; i++){
		 			forumFactory.getAllComments(_this.posts[i], i, function(comments, index){
 				_this.posts[index].comments = comments;
 			})
 		}
 		console.log(_this.posts);
 	})
			/* 
			if this is successful (no errors), then grab all questions
			again (including the new one) and display them to the user
			*/

			// if (data) {
			// 	forumFactory.getUserQuestions(user, function(questions){
			// 		_this.questions = questions;
			// 	})
			// }
		})
	}

})