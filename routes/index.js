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
            {
                buttonName: '选购工具',
                iconString: 'apps',
                subItems: [
                    {
                        subItemName: '预约试驾',
                        subItemString: 'layers'
                    },
                    {
                        subItemName: '查询经销商',
                        subItemString: 'line_style'
                    },
                    {
                        subItemName: '电子手册',
                        subItemString: 'content_paste'
                    },
                ]
            },
            {
                buttonName: '骑行学院',
                iconString: 'view_day',
                subItems: [
                    {
                        subItemName: 'About Us',
                        subItemString: 'account_balance'
                    },
                    {
                        subItemName: 'Features',
                        subItemString: 'art_track'
                    },
                    {
                        subItemName: 'Contact Us',
                        subItemString: 'location_on'
                    },
                    {
                        subItemName: 'Teams',
                        subItemString: 'people'
                    },
                    {
                        subItemName: 'Projects',
                        subItemString: 'assignment'
                    },
                    {
                        subItemName: 'Pricing',
                        subItemString: 'monetization_on'
                    },
                    {
                        subItemName: 'Testimonials',
                        subItemString: 'build'
                    },
                    {
                        subItemName: 'Contacts',
                        subItemString: 'call'
                    }
                ]
            },
            {
                buttonName: '哈雷车友会',
                iconString: 'view_carousel',
                subItems: [
                    {
                        subItemName: 'Headers',
                        subItemString: 'dns'
                    },
                    {
                        subItemName: 'Features',
                        subItemString: 'build'
                    },
                    {
                        subItemName: 'Blogs',
                        subItemString: 'list'
                    },
                    {
                        subItemName: 'Login Page',
                        subItemString: 'fingerprint'
                    },
                    {
                        subItemName: 'Pricing Page',
                        subItemString: 'attach_money'
                    },
                    {
                        subItemName: 'Pricing',
                        subItemString: 'monetization_on'
                    },
                    {
                        subItemName: 'Shopping Cart',
                        subItemString: 'shopping_basket'
                    },
                    {
                        subItemName: 'Ecommerce Page',
                        subItemString: 'store'
                    },
                    {
                        subItemName: 'Product Page',
                        subItemString: 'shopping_cart'
                    },
                    {
                        subItemName: 'Profile Page',
                        subItemString: 'account_circle'
                    },
                    {
                        subItemName: 'Signup Page',
                        subItemString: 'person_add'
                    }
                ]
            }
        ]
    });
});
router.get('/newModelItems', function (req, res, next) {
    res.json({
        newModelItems: [
            {
                cost: 145800,
                image: '../assets/img/moto/timg.jpeg',
                label: 'Street™750',
                color: 'black',
                category: '',
                categoryId: '',
                productId: '',
                afterDiscount: 142000,
                favourite: true
            },
            {
                cost: 142800,
                image: '../assets/img/moto/timg-1.jpeg',
                label: 'Street™ Bob',
                color: 'white',
                category: '',
                categoryId: '',
                productId: '',
                afterDiscount: 13900,
                favourite: true
            },
            {
                cost: 135800,
                image: '../assets/img/moto/timg-2.jpeg',
                label: 'Roadster™',
                color: 'yellow',
                category: '',
                categoryId: '',
                productId: '',
                afterDiscount: 13200,
                favourite: true
            }
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