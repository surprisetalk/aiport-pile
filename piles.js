
var mongoose = require('mongoose');

// TODO: create require('aiport-dev').pile that creates object
// TODO: this function should return our schema object with stuff added 

// TODO: error handling 
var piler = module_name =>
     new mongoose.model( 
	 module_name.replace('aiport-pile-',''), 
	 require( module_name ) 
     );

module.exports = fs.readdirSync('node_modules')
	.filter( module_name => module_name.startsWith('aiport-pile-') )
	.map( piler );
