const mongoose = require('mongoose');
const users = require('../users/schema');
const comments = require('../comments/schema');

const Schema = new mongoose.Schema({
	title: { type: String, required: true },
	body: { type: String, required: true },
  author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'users'
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'comments'
  },
	createdAt: { 
		type: Date, 
		default: Date.now 
	}
})

module.exports = mongoose.model('posts', Schema);