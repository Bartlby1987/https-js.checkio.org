// Ваше задание здесь создать функцию, которая получает массив(Array) и возвращает набор с 3 элементами - первым, третьим, вторым с конца.
//
//     Входные данные: Набор длинной не менее 3 элементов.
//
//     Выходные данные: Набор элементов.

function easyUnpack(elements) {
    let array=[];
    array.push(elements[0],elements[2],elements[elements.length-2])
    return array;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Examples:')
    console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))

    assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7])
    assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1])
    assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}