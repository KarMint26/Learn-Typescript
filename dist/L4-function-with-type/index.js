"use strict";
function tambahAngka(a, b = 10, c) {
    if (c) {
        console.log(a + b + c);
    }
    else {
        console.log(a + b);
    }
}
const exponen = (a, x) => a ** x;
// default parameter = number = 10;
// default argument = number?: number;
tambahAngka(5, 9);
tambahAngka(2, 20, 5);
console.log(exponen(2, 5));
