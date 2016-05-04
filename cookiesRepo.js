'use strict'

const cookies = require('./cookies');

module.exports = {
    getCookies: function getCookies() {
        return cookies;
    },
    getSugarCookies: function getSugarCookies() {
        return cookies.filter(cookie => cookie === 'Sugar');
    }    
}