const recipeRoutes = require('./recipe_routes');

module.exports = function(app, db) {
	recipeRoutes(app, db);
}
