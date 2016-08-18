var mongoose = require('mongoose');

var article_schema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	category: {
		type: String,
		index: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

var Article = module.exports = mongoose.model('Article', article_schema);

//Get all articles
module.exports.getArticles = function(callback){
	Article.find(callback);
}

//Get article by ID
module.exports.getArticleById = function(id, callback){
	Article.findById(id, callback);
}

//Get category Articles
module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	Article.find(query, callback);
}

//Create an Article
module.exports.createArticle = function(article, callback){
	article.save(callback);
}

//Update Article
module.exports.updateArtivcle = function(id, data, callback){
	var title = data.title;
	var body = data.body;
	var category = data.category;

	var query = {_id: id};

	Article.findById(id, function(err, article){
		if(!article){
			return next(new Error('Could not load Article'));
		}else{
			//Update
			article.title = title;
			article.body = body;
			article.category = category;

			article.save(callback);
		}
	});
}

//Remove Article
module.exports.removeArticle = function(id ,callback){
	Article.find({_id: id}).remove(callback);
}