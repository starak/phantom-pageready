var Promise = require( 'promise' );
module.exports = function( status ) {
    var page = this;
    return new Promise( function( resolve ) {
        var checkReadyState = function () {
            setTimeout( function() {
                page.evaluate( function () {
                    return document.readyState;
                } ).then( function( readyState ) {
                    if ( "complete" === readyState ) {
                        resolve( status );
                    } else {
                        checkReadyState();
                    }
                } )
            }, 30 );
        };
        checkReadyState();
    } );
};