var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Article.getArticles(function(err, articles){
		if(err){
			console.log(err);
		}
		res.json(articles);
	});
});

router.get('/:id', function(req, res){
	Article.getArticleById(req.params.id, function(err, articles){
		if(err){
			console.log(err);
		}
		res.json(articles);
	});
});

router.get('/category/:category', function(req, res, next){
	Article.getArticlesByCategory(req.params.category, function(err, articles){
		if(err){
			console.log(err);
		}
		res.json(articles);
	});
});

router.post('/', function(req, res, next){
	//Get form values
	var title = req.body.title;
	var category = req.body.category;
	var body = req.body.body;

	//Article Object
	var new_article = new Article({
		title: title,
		category: category,
		body: body
	});

	//Create Article
	Article.createArticle(new_article, function(err, article){
		if(err){
			console.log(err);
		}
		res.location('/articles');
		res.redirect('/articles');
	});
});

router.put('/', function(req, res, next){
	//Get form values
	var id = req.body.id;

	var data= {
		id: req.body.id,
		title: req.body.title,
	 	category: req.body.category,
		body: req.body.body
	}

	//Create Article
	Article.updateArticle(id, data, function(err, article){
		if(err){
			console.log(err);
		}
		res.location('/articles');
		res.redirect('/articles');
	});
});

router.delete('/:id', function(req, res, next){
	//Get form values
	var id = req.body.id;

	//Create Article
	Article.removeArticle(id, function(err, article){
		if(err){
			console.log(err);
		}
		res.location('/articles');
		res.redirect('/articles');
	});
});
module.exports = router;

