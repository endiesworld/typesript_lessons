"use strict";
let username = 'Emmanuel';
let age = 36;
let isMarried = true;
let weight; // Union string or numbers
let career;
const sum = (x, y) => {
    return (x + y);
};
console.log('sum of 5 & 9 is: ', sum(6, 9));
// Array
let arr_1 = ["A", "B", "C", "D",];
let arr_2 = [username, age];
let arr_3 = [...arr_1, ...arr_2, isMarried];
//Tupple like python tupple but with type
let my_tupple = [username, age, isMarried]; //Position matters
// Object
let my_object;
my_object = arr_1;
my_object = arr_3;
my_object = my_tupple; //
const my_object_2 = {
    name: "Emmanuel",
    age: 36,
    isMarried: true
};
let my_person = {
    name: "Emmanuel",
    age: 36,
    isMarries: true
};
const get_mamal_name = (mamal) => {
    var _a;
    // Checks name property is defined
    return (_a = mamal.name) === null || _a === void 0 ? void 0 : _a.toLowerCase();
};
const get_person_name = (person) => {
    return person.name ? person.name : ""; // Uses Tenary operator
};
console.log('The user name is: ', get_mamal_name(my_person));
