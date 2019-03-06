"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var cors = require('cors');
var Index = require("./routes/index");
var path = require("path");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', Index.router);
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/dist', express.static(__dirname + '/dist'));
app.listen(3000, function () {
    console.log("listening on port 3000");
});
//# sourceMappingURL=main.js.map