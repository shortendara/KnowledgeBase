var express = require('express');
var router = express.Router();
var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Category.getCategories(function(err, categories){
		if(err){
			console.log(err);
		}
		res.json(categories);
	});
});

router.get('/:id', function(req, res){
	Category.getCategoryById(req.params.id, function(err, categories){
		if(err){
			console.log(err);
		}
		res.json(categories);
	});
});

router.get('/category/:category', function(req, res, next){
	Category.getArticlesByCategory(req.params.category, function(err, articles){
		if(err){
			console.log(err);
		}
		res.json(articles);
	});
});

module.exports = router;
