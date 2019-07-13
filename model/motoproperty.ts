import * as mongoose from 'mongoose';

/* motoproperty SCHEMA 特性*/
let motopropertySchema = new mongoose.Schema({
    value: String,
    propertyname: String,    
});

/**
 *  export Menu model
 */

const motoproperty = mongoose.model('motoproperty', motopropertySchema);

export  { motoproperty, motopropertySchema };