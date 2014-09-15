angular
	.module('app')
	.factory('Post', function($resource) {
		var Post = $resource('http://localhost:3000/api/posts/:id.json', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
		
		return Post;
	});