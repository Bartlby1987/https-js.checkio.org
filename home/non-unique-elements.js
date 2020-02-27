// Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].
//
//     non-unique-elements
//
// Вх. данные: Список (list) целых чисел (int).
//
//     Вых. данные: Итератор (an iterable) целых чисел (int).
//
//     Как это используется: Эта задача поможет вам понять, как манипулировать массивами. Это полезный базис для решения более сложных задач. Также эта идея может быть легко обобщена для реальных задач. Для примера: если вам необходимо очистить статистику от редко встречающихся элементов (шум).
//
//     Предусловия:
// 0 < len(data) < 1000
"use strict";

function nonUniqueElements(data) {
    let newObj = {};
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] === data[j]) {
                newObj[data[i]] = [].push(i, j);
            }
        }
    }
    let strArray = [];
    for (let i = 0; i < data.length; i++) {
        strArray.push(String(data[i]))
    }
    console.log(strArray);
    let keys = Object.keys(newObj);
    let newArray = strArray.filter((el) => {
        for (let i = 0; i <= keys.length; i++) {
            if (el === keys[i]) {
                return el;
            }
        }
    });
    let endArray = [];
    for (let i = 0; i < newArray.length; i++) {
        endArray.push(Number(newArray[i]))
    }
    return endArray
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}