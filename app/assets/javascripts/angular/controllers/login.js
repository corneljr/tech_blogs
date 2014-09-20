angular
	.module('app')
	.controller('loginController', ['AuthService', '$scope', '$rootScope', function(AuthService, $rootScope, $scope) {

		AuthService.getSession().then( function(user) {
			console.log(user)
			if (user) {
				$scope.setCurrentUser(user);
			};
		});

		$scope.credentials = {
			email: '',
			password: ''
		};

		$scope.login = function(credentials) {
			AuthService.login(credentials).then( function(user) {
				$rootScope.$broadcast('login-success');
				$scope.setCurrentUser(user);
			}, function() {
				$rootScope.$broadcast('login-failed');
			});
		};
	}]);