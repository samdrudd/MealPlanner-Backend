module.exports = function(app, db) {
	app.post('/notes', (req, res) => {
		res.set('Access-Control-Allow-Origin', '*');
		console.log(req.body);
		res.send('Hello');
	});
};
