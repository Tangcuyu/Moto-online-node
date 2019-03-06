import * as express from 'express';
import { request } from 'https';
import * as util from 'util';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Expressangular'
    });
});

router.get('/menuItems', (req, res, next) => {
    res.json({
        menuItems: [
            { ButtonName: 'About'},
            { ButtonName: 'Contact'},
            { ButtonName: 'Login'}
        ]
    });
});

router.post('/login', (req, res, next) => {
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
    console.log(`login received:
        ${util.inspect(req.body, false, null)}`);
    res.sendStatus(200);
});

export {router};
