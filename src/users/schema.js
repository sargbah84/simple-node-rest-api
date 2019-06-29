const mongoose = require('mongoose');
const posts = require('../posts/schema');

const Schema = new mongoose.Schema({
	username: String,
	name: {
		firstname: String,
		lastname: String
	},
  posts: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'posts'
  },
	createdAt: { 
		type: Date, 
		default: Date.now 
	}
})

module.exports = mongoose.model('users', Schema);