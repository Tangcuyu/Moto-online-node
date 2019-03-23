"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var dbUrl = 'mongodb://localhost:27017/MotoOnline';
mongoose.connect(dbUrl);
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to:' + dbUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connected err:', err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});
//# sourceMappingURL=db.js.map