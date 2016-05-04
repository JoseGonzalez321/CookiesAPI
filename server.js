'use strict'

const express = require('express');
const cookies = require('./cookiesRepo');

const app = express();

const port = process.env.PORT || 9001;

app.get('/', (req, res) => {
   res.json(cookies.getCookies()); 
});

app.get('/sugarcookies', (req,res) => {
   res.json(cookies.getSugarCookies());
});

app.listen(port, function() {
    console.log('Server running on port', port);
});