angular
	.module('app')
	.controller('MainController', ['Post', '$scope', 
		function(Post, $scope) {

			$scope.posts = Post.query();

			$scope.newPost = new Post();

			$scope.save = function(post) {
				$scope.posts.push(post);
				post.$save();
				$scope.newPost = new Post();
			};

		}]);