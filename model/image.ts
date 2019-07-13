import * as mongoose from 'mongoose';

/* image SCHEMA */
let imageSchema = new mongoose.Schema({
    position: Number,
    attachment_content_type: String,
    attachment_file_name: String,
    type: String,
    attachment_updated_at: String,
    attachment_width: Number,
    attachment_height: Number,
    alt: String,
    viewable_type: String,
    viewable_id: Number,
    mini_url: String,
    small_url: String,
    product_url: String,
    large_url: String,
});

/**
 *  export Menu model
 */

const image = mongoose.model('image', imageSchema);

export  { image, imageSchema };