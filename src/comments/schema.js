const mongoose = require('mongoose');
const posts = require('../posts/schema');

const Schema = new mongoose.Schema({
	body: String,
  post: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'posts'
  },
	createdAt: { 
		type: Date, 
		default: Date.now 
	}
})

module.exports = mongoose.model('comments', Schema);