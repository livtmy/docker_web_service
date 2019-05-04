'use strict';

const express = require('express');
const app = express();
var fs = require("fs");

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/listFlowers', function (req, res) {
   fs.readFile( __dirname + "/" + "flowers.json", 'utf8', function (err, data) {
      console.log( data );
      res.setHeader('Access-Control-Allow-Origin', "*")
      res.setHeader('Access-Control-Allow-Headers', "*")
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "flowers.json", 'utf8', function (err, data) {
      var flowers = JSON.parse( data );
      var flower = flowers["flower" + req.params.id]
      console.log( flower );
      res.setHeader('Access-Control-Allow-Origin', "*")
      res.setHeader('Access-Control-Allow-Headers', "*")
      res.end( JSON.stringify(flower) );
   });
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
