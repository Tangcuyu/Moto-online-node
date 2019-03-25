/* 连接MongoDb数据库 */
import * as mongoose from 'mongoose';
let dbUrl = 'mongodb://localhost:27017/MotoOnline';
mongoose.connect(dbUrl);


/* 连接事件及控制台输出 */
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to:' + dbUrl);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connected err:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});


module.exports = mongoose;