angular
	.module('app')
	.factory('Post', ['$resource', function($resource) {
		var Post = $resource('/api/posts/:id.json', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		
		return Post;
	}]);