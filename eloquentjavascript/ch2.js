/**
 * Created by cippo on 1/3/2016.
 */

// Exercise: Looping a triangle
(function () {
    "use strict";
    var i = 1,
        triangle = '';

    while (i <= 7) {
        triangle += '#';
        i += 1;
        console.log(triangle);
    }
}());

// Exercise: FizzBuzz
(function () {
    "use strict";
    var i = 1;
    while (i < 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        if (i % 3 === 0) {
            console.log('Fizz');
        }
        if (i % 5 === 0) {
            console.log('Buzz');
        }
        i += 1;
    }
    // Shorter one for(x=0;x++<100;)console.log(x%3||"fizz",x%5||"buzz")
    // Found on https://gist.github.com/jaysonrowe/1592432
}());

// Exercise: Chess Board
(function () {
    "use strict";
    var gridSize = 8,
        grid = '',
        i,
        j;
    for (i = 0; i < gridSize; i += 1) {
        for (j = 0; j < gridSize; j += 1) {
            grid += (j + i) % 2 === 0 ? ' ' : '#'; // Creates columns
        }
        grid += '\n'; // Creates rows
    }
    console.log(grid);
}());
