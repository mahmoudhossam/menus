var express = require('express');
var router = express.Router();
var models = require('../models');

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
    models.Menu.find(menuId).then(function(menu) {
        res.json(menu);
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
        menu.destroy();
    });
    res.status(200).end();
});

module.exports = router;
