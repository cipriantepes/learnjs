/**
 * Created by cippo on 1/4/2016.
 */

// Exercise: Minimum
(function () {
    "use strict";
    function min(a, b) {
        return Math.min(a, b);
    }

    function max(a, b) {
        return Math.max(a, b);
    }

    console.log(min(0, 10)); // 0
    console.log(min(0, -10)); // -10
}());

// Exercise: Recursion
(function () {
    "use strict";
    function isEven(num) {
        if (num < 0) {
            return isEven(-num);
        }
        if (num === 0) {
            return true;
        }
        if (num === 1) {
            return false;
        }
        return isEven(num - 2);
    }

    console.log(isEven(50)); // true
    console.log(isEven(75)); // false
    console.log(isEven(-1)); // false
}());

// Exercise: Bean Counting
// TODO: Rewrite countBs to make use of countChar function
(function () {
    "use strict";
    function countBs(input) {
        var count = 0,
            i;
        for (i = 0; i < input.length; i += 1) {
            if (input.charAt(i) === 'B') {
                count += 1;
            }
        }
        return count;
    }

    function countChar(input, char) {
        var count = 0,
            i;
        for (i = 0; i < input.length; i += 1) {
            if (input.charAt(i) === char) {
                count += 1;
            }
        }
        return count;
    }

    console.log(countBs('BBC')); // 2
    console.log(countChar('kakkerlak', 'k')); // 4
}());
