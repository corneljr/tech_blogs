angular
	.module('app')
	.factory('AuthService', ['$http','Session', function($http, Session) {
		var authService = {};

		authService.login = function(credentials) {
			return $http({
								method: 'POST',
								url: '/sessions/create', 
								data: {
									email: credentials.email, 
									password: credentials.password
								}
							}).then( function(response){
								Session.create(response.data.user.id, response.data.user.email);
								return response.data.user;
							});
		}

		authService.isAuthenticated = function() {
			return !!Session.userId
		};

		authService.getSession = function() {
			return $http.get('/sessions/get_session')
						 		.then( function(response){
						 			if (response.data.status) {
						 				Session.create(response.data.user.id, response.data.user.email);
						 				return response.data.user;
						 			} else {
						 				return false;
						 			};
						 		});
		};

		return authService;
	}]);