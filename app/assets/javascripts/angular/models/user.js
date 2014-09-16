angular
	.module('app')
	.factory('User', ['$http', function($http) {

		console.log('running')
		var user = {}

		$http.get('sessions/get_session')
			.success( function(data) {
				console.log(data.status)
				console.log(data.user)
				if (data.status) {
					user = {
						isLogged: true,
						email: data.user.email
					};
				} else {
					user = {
						isLogged: false,
						email: ''
					};
				}
			});

		return user
	}]);