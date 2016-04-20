# phantom-pageready
PantomJS middleware to wait for page to complete, wrapped around [phantom](https://www.npmjs.com/package/phantom)

#### Install
	$ npm install phantom-pageready --save
	
#### Usage
```
var phantom = require( 'phantom-pageready' );
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
        // Page is loaded
    } );
```

#### Phantom
[More information on phantom](https://www.npmjs.com/package/phantom)