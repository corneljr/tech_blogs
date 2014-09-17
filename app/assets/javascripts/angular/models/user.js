angular
	.module('app')
	.factory('User', ['$http', function($http) {
		return {
			getSession: function() {
				return $http.get('sessions/get_session')
			}
		};
	}]);