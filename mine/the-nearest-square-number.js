// У вас есть некоторое число и вы пытаетесь найти ближайшее "квадратичное" число. Квадратичное число - это такое число, квадратный корень которого - целое число. Например, если исследуемое число 8, два близких квадратичных числа - 4 (корень из 4 == 2) и 9 (корень из 9 == 3). Таким образом ответ 9, так как 9 ближе к 8, чем 4.
//
// example
//
// example
//
// Входные данные: Число
//
// Выходные данные: Ближайшее квадратичное число
//
// Предусловия:
//     0 < number <= 1000000
"use strict";

function nearestSquare(number) {
    function isInt(num) {
        return Number.isInteger(num);
    }
    let big = number;
    let small = number;
    for (let i = 0; true; i++) {
        if (isInt(Math.sqrt(big))===false) {
            big = big + 1;
            if (isInt(Math.sqrt(small))===false) {
                small = small - 1;
            } else {
                return small
            }
        } else return big
    }
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(nearestSquare(8))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(nearestSquare(8), 9)
    assert.equal(nearestSquare(13), 16)
    assert.equal(nearestSquare(24), 25)
    assert.equal(nearestSquare(9876), 9801)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}