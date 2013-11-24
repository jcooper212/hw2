#! /usr/bin/env node

var crypto = require('crypto');

console.log(crypto.createHash('sha1').update("Hello world", 'asci').digest('hex'));
