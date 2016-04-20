# phantom-pageready
PantomJS npm module middleware to wait for page to complete

#### Install
	$ npm install phantom-pageready --save
	
#### Usage
```
var phantom = require( 'phantom' );
var pageready = require( 'phantom-pageready' );
var pInstance, gPage;

phantom.create()
    .then( ( instance ) => {
        pInstance = instance;
        return instance.createPage();
    } )
    .then( ( page ) => {
        gPage = page;
        return page.open( "http://example.com" )
            .then( pageready.bind( page ) );
    } )
    .then( ( status )=> {
        // Page is loaded
    } );
```