angular
	.module('app')
	.controller('MainController', ['Votes', '$http','Post', '$scope', 
		function(Votes, $http, Post, $scope) {

			Post.get( function(data) {
				$scope.postList = data
			}, function(err) {
			});

			$scope.newPost = new Post();

			Votes.getVotes().success( function(data) {
				$scope.votes = data;
			});

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
				Post.update(post)
				$scope.votes.push(post.id);
				$http.post('/api/votes', {post_id: post.id})
			};

			$scope.hasVoted = function(id) {
				if ($scope.votes && $scope.votes.indexOf(id) > -1) {
					return true;
				} else {
					return false;
				};
			};

		}]);