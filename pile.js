
var piles = require('./piles.js');

var verify_pile_name = ( name, cb ) => data =>
    name in piles ? cb( name, data ) : Promise.reject( { code: 404, msg: name + " is not a valid pile" } )

// KLUDGE
module.exports = name => 
({
    create: verify_pile_name( name, ( name, data ) => ( new piles[ name ]( data ) ).save( ( err, thing ) => err ? Promise.reject( { code: 500, msg: err } ) : Promise.resolve( thing ) ) ),
    update: verify_pile_name( name, ( name, data ) => piles[ name ].update( data ) ),
    remove: verify_pile_name( name, ( name, data ) => piles[ name ].remove( data ) ),
    fetch: verify_pile_name( name, ( name, data ) => piles[ name ].find( data ) )
});
