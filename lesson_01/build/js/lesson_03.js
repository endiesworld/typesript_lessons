"use strict";
// Convert to more or less specific types
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const add_or_concat = (a, b, c) => {
    return (c === 'add') ? a + b : '' + a + b;
};
let my_val = add_or_concat(1, 2, 'concat'); // This works well
let my_val_2 = add_or_concat(1, 2, 'concat'); // This does not works well and will create problems
// The DOM
const img = document.querySelector('img');
console.log(img.src); // This only worked because of the '!' character
const my_img = document.getElementById('#my_img');
console.log(my_img.src); // This only worked because we have told typescript that we know the type better
