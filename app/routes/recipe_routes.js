const RecipeModel = require('../models/RecipeModel');

module.exports = function(app, db) {
	const Recipe = db.model('Recipe', RecipeModel.recipeSchema, 'recipes');

	app.post('/recipes', (req, res) => {
		var recipe = new Recipe(req.body); 
		recipe.save((err) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(recipe);
		});
	});


	app.get('/recipes/:id', (req, res) => {
		Recipe.findById(req.params.id, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results);
		});
	});

	app.get('/recipes', (req, res) => {
		Recipe.find({}, (err, results) => {
			if (err) {
				console.log(err);
				res.status(500).send({"error" : err});
			}
			else
				res.send(results);
		});
	
	});

	app.put('/recipes/:id', (req, res) => {
		Recipe.update( {'_id' : req.params.id}, req.body, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});

	app.delete('/recipes/:id', (req, res) => {
		Recipe.remove( {'_id' : req.params.id}, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send( {"error" : err} );
			}
			else
				res.send(result);
		});
	});
};
