// Дан массив целых чисел. Нужно найти сумму элементов с четными индексами (0-й, 2-й, 4-й итд), затем перемножить эту сумму и последний элемент исходного массива. Не забудьте, что первый элемент массива имеет индекс 0.
//
// Для пустого массива результат всегда 0 (ноль).
//
//     Входные данные: Список (list) целых чисел (int).
//
//     Выходные данные: Число как целочисленное (int).
//
//     Предусловия: 0 ≤ len(array) ≤ 20
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
"use strict";

function evenLast(data) {
    if (data.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            sum = sum + data[i];
        }
    }
    return sum * data[data.length - 1];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}