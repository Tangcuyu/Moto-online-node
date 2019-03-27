import * as express from 'express';


const router = express.Router();


router.get('/', );

router.get('/apiMenuItems', );

router.get('/apiNewModelItems', );

router.get('/apiNewModelItems/:itemId', (req, res, next) => {
    res.send(req.params);
});

export default function setRoutes(app) {

    const router = express.Router();

    // Mock JSON data
    const menuItemMock = {
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
    };
    const itemListMock = {
        newModelItems: [
            {
                itemId: 1,
                cost: 145800,
                image: '../assets/img/moto/timg.jpeg',
                label: 'Street™750',
                color: 'black',
                category: '',
                categoryId: '',
                productId: '',
                afterDiscount: 142000,
                productBrief: 'Street™ 750定位于较窄街道,为此哈雷为Street™ 750配上了全新研发的新一代动力装置。这颗发动机命名为“革命”（Revolution X），虽然沿袭了经典的美式V型双缸结构，但是很多技术已经远离了哈雷的传统！',
                productDetail: 'Street™ 750的V型双缸，既没有采用哈雷最拿手的风冷系统，也没有利用新一代的半水冷Twin Cooled，而是用上了全水冷。这颗水冷动力装置，能够保证Street™ 750长时间慢速行驶时，不出现过热现象。同时，为了降低这颗水冷发动机的重心，哈雷放弃了惯用的45°汽缸夹角，改为60°',
                favourite: true
            },
            {
                itemId: 2,
                cost: 142800,
                image: '../assets/img/moto/timg-1.jpg',
                label: 'Street™ Bob',
                color: 'white',
                category: '',
                categoryId: '',
                productId: '',
                productBrief: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
                productDetail: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
                afterDiscount: 139000,
                favourite: false
            },
            {
                itemId: 3,
                cost: 135800,
                image: '../assets/img/moto/timg-2.jpg',
                label: 'Roadster™',
                color: 'yellow',
                category: '',
                categoryId: '',
                productId: '',
                productBrief: '新款Roadster™全新演绎运动者®所具备的优质特性，性能升级。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅。',
                productDetail: '新款Roadster™整车精工制造，经典燃油箱和短款后挡泥板相得益彰，配有带巨大三角轧头的43毫米倒式前叉、强大的双盘式前刹车、卓越的后悬挂装置和新型数字仪表系统。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅，这些不仅让你的骑行姿势看上去霸气外露，还能保证长期骑行的舒适感。45度、1200cc排量的发动机可提供强大的偏离扭矩。信马由缰，一路飞驰。',
                afterDiscount: 132000,
                favourite: true
            }
    
        ]
    };
    const itemDecMock = {
        newModelItems: [
            {
                itemId: 1,
                cost: 145800,
                image: '../assets/img/moto/timg.jpeg',
                label: 'Street™750',
                color: 'black',
                category: '',
                categoryId: '',
                productId: '',
                afterDiscount: 142000,
                productBrief: 'Street™ 750定位于较窄街道,为此哈雷为Street™ 750配上了全新研发的新一代动力装置。这颗发动机命名为“革命”（Revolution X），虽然沿袭了经典的美式V型双缸结构，但是很多技术已经远离了哈雷的传统！',
                productDetail: 'Street™ 750的V型双缸，既没有采用哈雷最拿手的风冷系统，也没有利用新一代的半水冷Twin Cooled，而是用上了全水冷。这颗水冷动力装置，能够保证Street™ 750长时间慢速行驶时，不出现过热现象。同时，为了降低这颗水冷发动机的重心，哈雷放弃了惯用的45°汽缸夹角，改为60°',
                favourite: true
            },
            {
                itemId: 2,
                cost: 142800,
                image: '../assets/img/moto/timg-1.jpg',
                label: 'Street™ Bob',
                color: 'white',
                category: '',
                categoryId: '',
                productId: '',
                productBrief: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
                productDetail: '倘若阁下的身材算不上高大威猛，但又觉得哈雷的883系列有点太过入门，想要感受更加浓厚的美式重机味道的话，那么这次介绍的哈雷Street Bob街霸车型是一个相当好的选择。',
                afterDiscount: 139000,
                favourite: false
            },
            {
                itemId: 3,
                cost: 135800,
                image: '../assets/img/moto/timg-2.jpg',
                label: 'Roadster™',
                color: 'yellow',
                category: '',
                categoryId: '',
                productId: '',
                productBrief: '新款Roadster™全新演绎运动者®所具备的优质特性，性能升级。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅。',
                productDetail: '新款Roadster™整车精工制造，经典燃油箱和短款后挡泥板相得益彰，配有带巨大三角轧头的43毫米倒式前叉、强大的双盘式前刹车、卓越的后悬挂装置和新型数字仪表系统。车身还配备采用5辐设计的19英寸（前）和18英寸（后）偏移分割式铸铝车轮、降低式把手、中置式控制件以及新款双人座椅，这些不仅让你的骑行姿势看上去霸气外露，还能保证长期骑行的舒适感。45度、1200cc排量的发动机可提供强大的偏离扭矩。信马由缰，一路飞驰。',
                afterDiscount: 132000,
                favourite: true
            }
    
        ]
    }

    // 路由到根目录
    router.route('/').get((req, res, next) => {
        res.send({title: 'Expressangular'});
    });

    // Menu items
    router.route('/menuItems').get((req, res, next) => {
        res.json(menuItemMock);
    });

    // New models
    router.route('/newModelItems').get((req, res, next) => {
        res.json(itemListMock);
    });
    router.route('/newModelItems/:itemId').get((req, res, next) => {
        res.send(req.params);
    });
    
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
  
  }
  
