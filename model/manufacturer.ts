import * as mongoose from 'mongoose';

/* Manufacturer SCHEMA */
let manufacturerSchema = new mongoose.Schema({
    name: String,
    email: String,
    logo: String,
    brief: String
});

/**
 *  export Menu model
 */

const manufacturer = mongoose.model('manufacturer', manufacturerSchema);

export  { manufacturer, manufacturerSchema };