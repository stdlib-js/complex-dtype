/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var dtypes = require( '@stdlib/complex-dtypes' );
var ctors = require( '@stdlib/complex-ctors' );
var dtype = require( './../lib' );

// Get a list of supported complex number data types:
var DTYPES = dtypes();

// For each supported data type, create a complex number and confirm its data type...
var ctor;
var dt;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
	ctor = ctors( DTYPES[ i ] );
	dt = dtype( new ctor( 1.0, 2.0 ) );
	console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
}
