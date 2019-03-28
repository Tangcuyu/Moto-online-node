import * as mongoose from 'mongoose';

/* Submenu SCHEMA */
let SubmenuSchema = new mongoose.Schema({
    subItemName: String,
    subItemString: String
});

/* Menu SCHEMA */
let menuSchema = new mongoose.Schema({
    buttonName: String,
    iconString: String,
    subItems: [SubmenuSchema]
});

/**
 *  export Menu model
 */

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;