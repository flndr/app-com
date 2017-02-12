// FILE APP.JS
import Com from '../src/Com';

const EVENTS = {
    CATCHALL     : '/',
    WILDCARD     : '/some/',
    SPECIFIC_ONE : '/some/event',
    SPECIFIC_TWO : '/some/other/event',
    VARIOUS      : {
        ONE : '/foo/bar',
        TWO : '/bazinga',
    }
};

const COM = new Com();
COM.setSeparator( '/' );
COM.registerEventNames( EVENTS );

export const APP = {
    COM    : COM,
    EVENTS : EVENTS
};

// FILE SOME-MODULE.JS
import APP from './App';
APP.COM.broadcast( APP.EVENTS.SPECIFIC_ONE, { some : 'data' } );

// FILE SOME-OTHER-MODULE.JS
import APP from './App';
let sub = APP.COM.subscribe( APP.EVENTS.SPECIFIC_ONE, function ( data ) {
    console.log( data.some );
} );

sub.start();
