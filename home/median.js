// Медиана — это числовое значение, которое делит сортированый массив чисел на нижнюю и верхнюю половины. В сортированом массиве с нечётным числом элементов медиана — это число в середине массива. Для массива с чётным числом элементов, где нет одного элемента точно посередине, медиана — это среднее значение двух чисел, находящихся в середине массива. В этой задаче дан непустой массив натуральных чисел. Вам необходимо найти медиану данного массива.
//
//     Входные данные: Массив как список (list) чисел (int).
//
//     Выходные данные: Медиана как число (int, float).
//
//     Предусловия:
// 1 < len(data) ≤ 1000
// all(0 ≤ x < 10 ** 6 for x in data)

function median(data) {
    data.sort(function (a, b) {
        return a - b;
    });
    if (data.length % 2 !== 0) {
        return data[((data.length - 1) / 2)]
    } else {
        return (data[data.length/2]+data[(data.length/2)-1])/2
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}