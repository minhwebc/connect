app.controller('postController', function($routeParams, sessionFactory, forumFactory, $location) {
	var _this = this;

	sessionFactory.getUser(function(user){
 		_this.user = user;
 		console.log(_this.user);
 	})

 	forumFactory.getPost($routeParams.id, function(post){
 		_this.currentPost = post[0];
 		forumFactory.getAllCommentsOfOne(_this.currentPost, function(comments){
 			_this.currentPost.comments = comments
 			for(var i = 0; i < comments.length; i++){
 				forumFactory.getPostsByOneUser(_this.currentPost.comments[i].author_id, i, function(posts, index){
 					_this.currentPost.comments[index].posts = posts;
 				})
 			}
 		})
 		forumFactory.getPostsByUser(_this.currentPost.user_id, function(posts){
 			_this.currentPost.posts_of_author = posts;
 		})
 	})

 	_this.postComment = function(){
 		_this.newComment.user_id = _this.user.id;
 		_this.newComment.post_id = _this.currentPost.id;
 		forumFactory.postComment(_this.newComment, function(result){
			forumFactory.getPost($routeParams.id, function(post){
		 		_this.currentPost = post[0];
		 		forumFactory.getAllCommentsOfOne(_this.currentPost, function(comments){
		 			_this.currentPost.comments = comments
		 			for(var i = 0; i < comments.length; i++){
		 				forumFactory.getPostsByOneUser(_this.currentPost.comments[i].author_id, i, function(posts, index){
		 					_this.currentPost.comments[index].posts = posts;
		 				})
		 			}
		 		})
		 		forumFactory.getPostsByUser(_this.currentPost.user_id, function(posts){
		 			_this.currentPost.posts_of_author = posts;
		 		})
		 		_this.newComment = {};
			})
 		})
 	}
});