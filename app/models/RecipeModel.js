var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.recipeSchema = Schema({
		name : String,
		instructions : String,
		ingredients : Array 
});
