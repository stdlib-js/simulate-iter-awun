/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var iterSineWave = require( '@stdlib/simulate-iter-sine-wave' );
var iterawun = require( './../lib' );

// Create an iterator for generating a sine wave:
var sine = iterSineWave({
	'iter': 100,
	'amplitude': 10.0
});

// Create an iterator for introducing additive white uniform noise:
var it = iterawun( sine, 3.0 );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
