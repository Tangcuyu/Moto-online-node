import * as mongoose from 'mongoose';

/* 
let submenuSchema = new mongoose.Schema({
    subItemName: String,
    subItemString: String
});


let Submenu = mongoose.model('Submenu', submenuSchema);

let newSubmenu = new Submenu({
    subItemName: '预约试驾',
    subItemString: 'layers'
});
newSubmenu.save((err, submenu) => {
    if (!err) {
        console.log('newSubmenu saved!' + submenu.subItemName);
    }
});
 */


/* Menu SCHEMA */
let menuSchema = new mongoose.Schema({
    buttonName: String,
    iconString: String,
    subItems: {
        subItemName: String,
        subItemString: String
    }
});

/**
 * @typedef Menu
 */
module.exports = mongoose.model('Menu', menuSchema);