const post = require('./posts/controller');
const user = require('./users/controller');
const comment = require('./comments/controller');

const routes = [
	// User routes
	{
		method: 'GET',
		url: '/api/users',
		handler: user.get
	},
	{
		method: 'GET',
		url: '/api/user/:id',
		handler: user.find
	},
	{
		method: 'POST',
		url: '/api/user',
		handler: post.insert
	},
	{
		method: 'PUT',
		url: '/api/user/:id',
		handler: post.update
	},
	{
		method: 'DELETE',
		url: '/api/user/:id',
		handler: post.delete
	},
	// Post routes
	{
		method: 'GET',
		url: '/api/posts',
		handler: post.get
	},
	{
		method: 'GET',
		url: '/api/post/:id',
		handler: post.find
	},
	{
		method: 'POST',
		url: '/api/post',
		handler: post.insert
	},
	{
		method: 'PUT',
		url: '/api/post/:id',
		handler: post.update
	},
	{
		method: 'DELETE',
		url: '/api/post/:id',
		handler: post.delete
	},
	// Comment routes
	{
		method: 'GET',
		url: '/api/comments',
		handler: comment.get
	},
	{
		method: 'GET',
		url: '/api/comment/:id',
		handler: comment.find
	},
	{
		method: 'POST',
		url: '/api/comment',
		handler: comment.insert
	},
	{
		method: 'PUT',
		url: '/api/comment/:id',
		handler: comment.update
	},
	{
		method: 'DELETE',
		url: '/api/comment/:id',
		handler: comment.delete
	}
]

module.exports = routes;