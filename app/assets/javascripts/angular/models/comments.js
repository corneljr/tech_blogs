// angular
// 	.module('app')
// 	.factory('Comment', ['$resource', function($resource) {
// 		return {
// 			get: function(post_id) {
// 				return $http({method: 'GET', url:'api/posts/'+post_id+'/comments'});
// 			},
// 			create: function(post_id) {
// 				return $http({method: 'POST', url:'api/posts/'+post_id});
// 			},
// 			destroy: function(post_id, id) {
// 				return $http({method: 'DELETE', url:'api/posts/'+post_id+'/'+id})
// 			}
// 		};
// 	}]);