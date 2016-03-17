/**
 * Created by Hans Van Staey on 17/03/2016.
 */

var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
var app = express();
app.use(bodyparser.json());

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
});
app.get("/css/reset.css",function(req,res) {
    res.sendFile(__dirname + "/css/" + "reset.css");
});
app.get("/js/controller.js",function(req,res) {
    res.sendFile(__dirname + "/js/" + "controller.js");
});

app.listen(3000);