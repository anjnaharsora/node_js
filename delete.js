/**
 * Created by lcom23_two on 1/17/2017.
 */
/**
 * Created by lcom23_two on 1/17/2017.
 */

var express = require('express');
var app = express();
var fs = require("fs");

app.delete('/deleteUser',function (req,res) {

    fs.readFile(__dirname + "/" + "users.json" , 'utf8', function (err,data) {
        users = JSON.parse(data);
        delete users["user"+2];

        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8085,function () {

    var host = server.address().address
    var port = server.address().port

    console.log("user working on host and port:%s:%s",host,port);
})