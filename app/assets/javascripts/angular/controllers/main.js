angular
	.module('app')
	.controller('MainController', ['Post', '$scope', 
		function(Post, $scope) {

			$scope.postList = Post.get();

			$scope.newPost = new Post();

			var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    	var getSuffix = function(i) {
		    var j = i % 10,
		        k = i % 100;
		    if (j == 1 && k != 11) {
		        return i + "st";
		    }
		    if (j == 2 && k != 12) {
		        return i + "nd";
		    }
		    if (j == 3 && k != 13) {
		        return i + "rd";
		    }
		    return i + "th";
		  };

		  function getDateString() {
		  	var date = new Date();
				var day = getSuffix(date.getDate());
				var month = monthNames[date.getMonth()];
				var dateString = month + ' ' + day
				return dateString
		  }

			$scope.save = function(post) {

				var dateString = getDateString();

				if ($scope.postList[dateString]) {
					$scope.postList[dateString].push(post);
				} else {
					$scope.postList[dateString] = []
					$scope.postList[dateString].push(post);
				};

				post.$save();
				$scope.newPost = new Post();
			};

			$scope.upvote = function(post, date) {
				post.vote_count += 1
				$scope.postList.update(post)
			};

		}]);