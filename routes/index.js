"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var util = require("util");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Expressangular'
    });
});
router.get('/menuItems', function (req, res, next) {
    res.json({
        menuItems: [
            { ButtonName: 'About' },
            { ButtonName: 'Contact' },
            { ButtonName: 'Login' }
        ]
    });
});
router.post('/login', function (req, res, next) {
    /* if (req.body.userName.length > 0) {
        req.session['userName'] = req.body.userName;
        console.log(`user login`);
        // res.redirect('/');
    } else {
        res.render('index', {
            title: 'Express',
            ErrorMessage: 'Please enter a user name'
        });
    } */
    console.log(res);
    console.log("login received:\n        " + util.inspect(req.body, false, null));
    res.sendStatus(200);
});
//# sourceMappingURL=index.js.map