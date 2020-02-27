// Дан массив с положительными числами и число N. Вы должны найти N-ую степень элемента в массиве с индексом N. Если N за границами массива, тогда вернуть -1. Не забывайте, что первый элемент имеет индекс 0.
//
// Давайте посмотрим на несколько примеров:
//     - массив = [1, 2, 3, 4] и N = 2, тогда результат 32 == 9;
// - массив = [1, 2, 3] и N = 3, но N за границами массива, так что результат -1.
//
// Входные значения: Два агумента. Массив как список целых и число как целое.
//
//     Выходные значения: Целое число.
//
//     Предусловие: 0 < len(array) ≤ 10
// 0 ≤ N
// all(0 ≤ x ≤ 100 for x in array)
"use strict";

function indexPower(array, n){
    if (array.length<=n){
        return -1;
    }
    else{
        let number =array[n];
        return Math.pow(number,n);
    }
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(indexPower([1, 2, 3, 4], 2))

    assert.equal(indexPower([1, 2, 3, 4], 2), 9, "Square");
    assert.equal(indexPower([1, 3, 10, 100], 3), 1000000, "Cube");
    assert.equal(indexPower([0, 1], 0), 1, "Zero power");
    assert.equal(indexPower([1, 2], 3), -1, "IndexError");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}