module.exports = function(app, db) {
	app.post('/recipe', (req, res) => {
		console.log(req.body);
		db.collection('recipes').insert( req.body , (err, result) => {
			if (err)
				res.send(req.statusText);
			else
				res.send(result.ops[0]);
		});

	});
};
