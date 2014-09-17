angular
	.module('app')
	.factory('Votes', ['$http', function($http) {
		return {
			getVotes: function() {
				return $http.get('api/votes');
			}
		};
	}]);