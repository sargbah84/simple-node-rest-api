const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const routes = require('./src/routes');

const db = 'mongodb://localhost:27017/blog_v1';

routes.forEach((route, index) => {
	fastify.route(route)
})

fastify.get('/', async (req, res) => {
	return "Hello world";
});

const start = async () => {
	try {
		await fastify.listen(8880)
		
		mongoose.connect(db, { useNewUrlParser: true })
			.then(() => console.log('MongoDB connected...'))
				.catch(err => console.log(err));

		fastify.log.info(`Server listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}


start();