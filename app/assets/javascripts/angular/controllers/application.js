angular
	.module('app')
	.controller('ApplicationController', ['$rootScope', 'AuthService', function($rootScope, AuthService) {
		$rootScope.currentUser = null;

		$rootScope.setCurrentUser = function(user) {
			$rootScope.currentUser = user;
		};

	}]);