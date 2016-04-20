var phantom = require( './pageready' );
var tap = require('tap');
var pInstance, gPage;

phantom.create()
    .then( ( instance ) => {
        pInstance = instance;
        return instance.createPage();
    } )
    .then( ( page ) => {
        gPage = page;
        return page.open( "http://example.com" )
            .then( phantom.pageready.bind( page ) );
    } )
    .then( ( status )=> {
        tap.ok( status );
        gPage.evaluate( function () {
            return document.readyState;
        } ).then( function( readyState ) {
            tap.equal( "complete", readyState );
            pInstance.exit();
        })
    } );
