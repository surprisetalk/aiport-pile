
var piles = require('./piles.js');

// TODO: errors
module.exports = name => 
({
    create: data => ( new piles[ name ]( data ) ).save( ( err, thing ) => err ? Promise.reject( err ) : thing ),
    fetch: piles[ name ].find
});
