// В этой миссии вы должны написать функцию, которая представит человека по переданным параметрам.
//
//     Входные данные: Два аргумента строка(str) и положительное число(int)
//
// Output: Строка(str).

"use strict";

// 1. on CheckiO your solution should be a function
// 2. the function should return the right answer, not print it.

function sayHi(name, age) {
    // your code here
    return "Hi. My name is "+name+" and I'm "+age+" years old";
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(sayHi("Alex", 32), "Hi. My name is Alex and I'm 32 years old")
    assert.equal(sayHi("Frank", 68), "Hi. My name is Frank and I'm 68 years old")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}