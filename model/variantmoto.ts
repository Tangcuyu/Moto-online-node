import * as mongoose from 'mongoose';
require('mongoose-currency').loadType(mongoose);
import { manufacturerSchema } from './manufacturer';
import { imageSchema } from './image';

let Currency = mongoose.Types.Currency;

/**
 *  variantmoto SCHEMA  具体的某一个moto商品
 *  slug：固定链接地址：用于生成一个有意义URL.http://www.abc.com/what-is-slug 后面的“what-is-slug”就是slug
 */

let variantmotoSchema = new mongoose.Schema({
    name: String,
    sku: String, //  Stock keeping unit
    price: String,
    weight: String,
    height: String,
    width: String,
    depth: String,
    is_master: Boolean,
    slug: String,
    manufacturer: manufacturerSchema,
    description: String,
    track_inventory: Boolean,
    cost_price: String,
    option_values: [String],
    total_on_hand: Number,
    display_price: String,
    options_text: String,
    in_stock: Boolean,
    is_backorderable: Boolean,
    is_destroyed: Boolean,
    is_orderable: Boolean,
    images: [imageSchema],
    selling_price: Currency,
    max_retail_price: Currency,
});

/**
 *  export variantmoto model
 */

const variantmoto = mongoose.model('variantmoto', variantmotoSchema);

export  { variantmoto, variantmotoSchema };