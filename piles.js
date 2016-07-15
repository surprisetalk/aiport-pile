
var pile = require('./pile.js');
var package = require('../aiport-package/package.js');

module.exports = package.installed().pile.map( pile );
