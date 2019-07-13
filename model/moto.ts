import * as mongoose from 'mongoose';
require('mongoose-currency').loadType(mongoose);
import { manufacturerSchema } from './manufacturer';
import { variantmotoSchema } from './variantmoto';
import { imageSchema } from './image';
import { motopropertySchema } from './motoproperty';

let Currency = mongoose.Types.Currency;

/**
 *  Moto SCHEMA
 *  slug：固定链接地址：用于生成一个有意义URL.http://www.abc.com/what-is-slug 后面的“what-is-slug”就是slug
 */

let motoSchema = new mongoose.Schema({
    name: String,
    description: String,
    available_on: Date,
    slug: String,
    is_favorited_by_current_user: Boolean,
    manufacturer: manufacturerSchema,
    meta_description: String,
    meta_keywords: String,
    shipping_category_id: Number,
    taxon_ids: [Number],
    total_on_hand: Number,
    has_variants: Boolean,
    master: variantmotoSchema,
    variants: [variantmotoSchema],
    option_types: [String],
    product_properties: [motopropertySchema],
    product_url: String,
    currency: String,
    selling_price: Currency,
    max_retail_price: Currency,
    options: [String],
    images: [imageSchema],
    is_orderable: Boolean,
});

/**
 *  export moto model
 */

const moto = mongoose.model('moto', motoSchema);

export  { moto, motoSchema };