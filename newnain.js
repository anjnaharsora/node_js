/**
 * Created by lcom23_two on 1/17/2017.
 */
var express = require('express');
var app = express();
var fs = require("fs");
var server1 = require('./diplayUser');

app.use('/',server1);

//noinspection JSDuplicatedDeclaration
var server = app.listen(8085,function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("done");
});