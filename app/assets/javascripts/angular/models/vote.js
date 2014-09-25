angular
	.module('app')
	.factory('Votes', ['$http', function($http) {
		return {
			getVotes: function() {
				return $http.get('api/votes');
			},
			unVote: function(id) {
				return $http.post('api/votes/' + id + '/destroy')
			}
		};
	}]);