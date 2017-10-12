module.exports = function(app, db) {
	app.post('/recipe', (req, res) => {

		console.log(req.body);

		if (req.body.name === undefined || req.body.ingredients === undefined || req.body.instructions === undefined) 
			res.status(400).send( {"error" : "Malformed object"} );
		else if (req.body.name.trim() === "" || req.body.ingredients.length <= 0 || req.body.instructions.trim() == "")
			res.status(400).send( {"error" : "Empty name, ingredients, or instructions"} );
		else {		
			db.collection('recipes').insert( req.body , (err, result) => {
				if (err)
					res.send(req.statusText);
				else
					res.send(result.ops[0]);
			});
		}
	});
};
