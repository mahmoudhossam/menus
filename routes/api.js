var express = require('express');
var router = express.Router();
var models = require('../models');

// Menu routes

router.get('/menus', function(req, res) {
    models.Menu.findAll().then(function(menus) {
        res.json(menus);
    });
});

router.post('/menus', function(req, res) {
    models.Menu.create({'name': req.body.name}).then(function(menu) {
        res.json({'id': menu.id});
    });
});

router.get('/menus/:menuId', function(req, res) {
    var menuId = req.params.menuId;
    var result = {};
    models.Menu.find(menuId).then(function(menu) {
        result.menu = menu;
        models.Category.findAll({where: {'MenuId': menuId}}).then(function(categories) {
            result.categories = categories;
            res.json(result);
        });
    });
});

router.put('/menus/:menuId', function(req,res) {
    var menuId = req.params.menuId;
    models.Menu.find(menuId).then(function(menu) {
        menu.name = req.body.name;
        menu.save().then(function() {
            res.status(200).end();
        });
    });
});

router.delete('/menus/:menuId', function(req, res) {
    var menuId = req.params.menuId;
    models.Menu.find(menuId).then(function(menu) {
        menu.destroy().then(function() {
            res.status(200).end();
        });
    });
});


// Category routes

router.post('/menus/:menuId/categories/add', function(req, res) {
    var menuId = req.params.menuId;
    models.Category.create({'name': req.body.name, 'MenuId': menuId}).then(function(category) {
        res.json({'id': category.id});
    });
});

router.get('/menus/:menuId/categories/:categoryId', function(req, res) {
    var menuId = req.params.menuId;
    var categoryId = req.params.categoryId;
    var result = {};
    models.Category.find(categoryId).then(function(category) {
        result.category = category;
        models.Menu.find(menuId).then(function(menu) {
            result.menu = menu;
            res.json(result);
        });
    });
});

router.delete('/menus/:menuId/categories/:categoryId', function(req, res) {
    var categoryId = req.params.categoryId;
    models.Category.find(categoryId).then(function(category) {
        category.destroy().then(function() {
            res.status(200).end();
        });
    });
});

router.put('/menus/:menuId/categories/:categoryId', function(req, res) {
    var categoryId = req.params.categoryId;
    models.Category.find(categoryId).then(function(category) {
        category.name = req.body.name;
        category.save().then(function() {
            res.status(200).end();
        });
    });
});

module.exports = router;
