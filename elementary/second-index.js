// Даны 2 строки. Необходимо найти индекс второго вхождения второй строки в первую.
//
//     Разберем самый первый пример, когда необходимо найти второе вхождение "s" в слове "sims". Если бы нам надо было найти ее первое вхождение, то тут все просто: с помощью функции indexOf мы можем узнать, что "s" – это самый первый символ в слове "sims", а значит индекс первого вхождения равен 0. Но нам необходимо найти вторую "s", а она 4-ая по счету. Значит индекс второго вхождения (и ответ на вопрос) равен 3.
//
// Input: Две строки (String).
//
//     Output: Int or undefined
"use strict";

function secondIndex(data, string) {
    let str = data.trim();
    let newStr = str.split('');
    let counter = [];
    for (let i = 0; i < newStr.length; i++) {
        if (string === newStr[i]) {
            counter.push(newStr[i], i)
        }
    }
    if (counter.length >= 4) {

        return counter[3];
    } else {
        return undefined
    }
}
var assert = require('assert');

if (!global.is_checking) {
    console.log('Example')
    console.log(secondIndex("sims", "s"))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(secondIndex("sims", "s"), 3)
    assert.equal(secondIndex("find the river", "e"), 12)
    assert.equal(secondIndex("hi", " "), undefined)
    assert.equal(secondIndex("hi mayor", " "), undefined)
    assert.equal(secondIndex("hi mr Mayor", " "), 5)}