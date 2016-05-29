
var piles = require('./piles.js');

module.exports = ( name ) => 
({
    fetch: piles[ name ].find
});
