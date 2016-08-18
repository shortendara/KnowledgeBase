var mongoose = require('mongoose');

var category_schema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description: {
		type: String
	}
});

var Category = module.exports = mongoose.model('Category', category_schema);

//Get all categories
module.exports.getCategories = function(callback){
	Category.find(callback);
}

//Get article by ID
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

//Get category Articles
module.exports.createCategory = function(new_category, callback){
	new_category.save(callback);
}

