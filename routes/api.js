var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/menus', function(req, res) {
    models.Menu.findAll().then(function(menus) {
        res.json(menus);
    });
});

router.post('/menus', function(req, res) {
    models.Menu.create({'name': req.body.name}).then(function() {
        res.send('OK');
    });
});

module.exports = router;
