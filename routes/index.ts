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
