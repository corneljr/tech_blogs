angular
	.module('app')
	.service('Session', ['$http', function($http) {
		this.create = function(userId, userEmail) {
			this.userId = userId;
			this.userEmail = userEmail;
		};
		this.destroy = function() {
			this.userId = null;
			this.userRole = null;
		};

		return this;
	}]);