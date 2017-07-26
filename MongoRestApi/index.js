"use strict";

var express = require('express');
var mongodb = require('mongodb');
var uuid = require('uuid/v4');

var myProducts = require("./modules/products.js");
var myOrders = require("./modules/orders.js");

//myModule.start();

var app = express();
// products related requests
{
    //create
    app.put('/products', function (req, res) {
        res.end();
    })

    //update
    app.post('/products', function (req, res) {
        res.end();
    })

    //get list
    app.get('/products', function (req, res) {
        res.end();
    })

    //delete
    app.delete('/products', function (req, res) {
        res.end();
    })
}

//Orders related requests
{
    //create
    app.put('/orders', function (req, res) {
        res.end();
    })

    //update
    app.post('/orders', function (req, res) {
        res.end();
    })

    //get list
    app.get('/orders', function (req, res) {
        res.end();
    })

    //delete
    app.delete('/orders', function (req, res) {
        res.end();
    })
}

//app start listen
app.listen(3000, function () {
    console.log('Mongo Rest Api listening on port 3000!');
})

