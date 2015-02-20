var express = require('express');
var router = express.Router();
var models = require('../models');

// Menu endpoints

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

// Category endpoints

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
            models.Item.findAll({where: {'CategoryId': categoryId}}).then(function(items){
                result.items = items;
                res.json(result);
            });
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

// Item endpoints

router.post('/menus/:menuId/categories/:categoryId/items/add', function(req, res) {
    var categoryId = req.params.categoryId;
    models.Item.create({'name': req.body.name, 'CategoryId': categoryId}).then(function(item) {
        res.json({'id': item.id});
    });
});

router.get('/menus/:menuId/categories/:categoryId/items/:itemId', function(req, res) {
    var categoryId = req.params.categoryId;
    var itemId = req.params.itemId;
    var result = {};
    models.Item.find(itemId).then(function(item) {
        result.item = item;
        models.Category.find(categoryId).then(function(category) {
            result.category = category;
            models.Size.findAll({where: {'ItemId': itemId}}).then(function(sizes){
                result.sizes = sizes;
                res.json(result);
            });
        });
    });
});

router.delete('/menus/:menuId/categories/:categoryId/items/:itemId', function(req, res) {
    var itemId = req.params.itemId;
    models.Item.find(itemId).then(function(item) {
        item.destroy().then(function() {
            res.status(200).end();
        });
    });
});

router.put('/menus/:menuId/categories/:categoryId/items/:itemId', function(req, res) {
    var itemId = req.params.itemId;
    models.Item.find(itemId).then(function(item) {
        item.name = req.body.name;
        item.save().then(function() {
            res.status(200).end();
        });
    });
});

// Size endpoints

router.post('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/add', function(req, res) {
    var itemId = req.params.itemId;
    models.Item.create({'name': req.body.name, 'price': req.body.price, 'ItemId': itemId}).then(function(size) {
        res.json({'id': size.id});
    });
});

router.get('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/:sizeId', function(req, res) {
    var sizeId = req.params.sizeId;
    var itemId = req.params.itemId;
    var result = {};
    models.Item.find(itemId).then(function(item) {
        result.item = item;
        models.Size.find(sizeId).then(function(size) {
            result.size = size;
            res.json(result);
        });
    });
});

router.delete('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/:sizeId', function(req, res) {
    var sizeId = req.params.sizeId;
    models.Size.find(sizeId).then(function(size) {
        size.destroy().then(function() {
            res.status(200).end();
        });
    });
});

router.put('/menus/:menuId/categories/:categoryId/items/:itemId/sizes/:sizeId', function(req, res) {
    var sizeId = req.params.sizeId;
    models.Size.find(itemId).then(function(size) {
        size.name = req.body.name;
        size.price = req.body.price;
        size.save().then(function() {
            res.status(200).end();
        });
    });
});
            

module.exports = router;
