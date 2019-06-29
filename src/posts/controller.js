const boom = require('boom');

const Schema = require('./schema');

/* Comment out Get all function to use */
exports.get = async (req, res) => {
	try {
		const data = await Schema.find()
										.populate('comments')
											.populate('author', 'name')
												.exec();
		
		return data;
	} catch (err) {
		throw boom.boomify(err);
	}
}

exports.find = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Schema.findById(id)
												.populate('comments')
													.populate('author', 'name')
														.exec();
		return data;
	} catch (err) {
		throw boom.boomify(err)
	}
}

/* Comment out Insert function to use */
exports.insert = async (req, res) => {
	try {
		const data = new Schema(req.body);
		return data.save();
	} catch (err) {
		throw boom.boomify(err);
	}
}

exports.update = async (req, res) => {
	try {
		const id= req.params.id;
		const data = req.body;
		const { ...updateData } = data;
		const update = await Schema.findByIdAndUpdate(id, updateData, {new: true});
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
}

/* Comment out Delete function to use */
exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await Schema.findByIdAndRemove(id);
		return data;
	} catch (err) {
		throw boom.boomify(err);
	}
}