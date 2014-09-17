angular
	.module('app')
	.controller('loginController', ['User', '$http', '$scope', function(User, $http, $scope) {

		User.getSession().success( function(data) {
			if (data.status) {
				$scope.user = {
					isLogged: true,
					email: data.user.email
				};
			} else {
				$scope.user = {
					isLogged: false,
					email: ''
				};
			}
		});

		$scope.login = function(user) {
			$http({
				method: 'POST',
				url: '/sessions/create', 
				data: {
					email: user.email, 
					password: user.password
				}
			})
				.success( function(data) {
					if (data.status) {
						console.log('working')
						User.isLogged = true;
						User.email = data.user.email;
					} else {
						User.isLogged = false;
						User.email = '';
					}
				})
				.error( function(data) {
					User.isLogged = false;
					User.email = '';
				});
		};
	}]);