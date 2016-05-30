
var mongoose = require('mongoose');
var package = require('aiport-package');

// TODO: create require('aiport-dev').pile that creates object
// TODO: this function should return our schema object with stuff added 

// TODO: error handling 
var piler = module_name =>
     new mongoose.model( 
	 module_name, 
	 require( "aiport-pile-" + module_name ) 
     );

module.exports = package.installed().pile.map( piler );
