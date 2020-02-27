// В комьютерной науке и дискретной математике, инверсия - это пара позиций последовательности, где элементы на этих позициях выпадают из естественного порядка. Таким образом, если мы используем порядок по возрастанию для группы чисел, то инверсия получается, когда более крупные цифры стоят перед меньшим значением в последовательности.
//
//     Проверим такой пример последовательности: (1, 2, 5, 3, 4, 7, 6) и мы можем видеть здесь три инверсии
// - 5 и 3; - 5 и 4; - 7 и 6.
//
// Вам дана последовательность уникальных чисел и вы должны подсчитать число инверсий в этой последовательности.
//
//     Входные данные: Последовательность как кортеж целых чисел.
//
//     Выходные данные: Количество инверсий.
//
//     Предусловия: 2 < len(sequence) < 200
// len(sequence) == len(set(sequence))
// all(-100 < x < 100 for x in sequence)

function countInversion(sequence){
    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
        for (let j = i+1; j < sequence.length; j++) {
            if (sequence[i] > sequence[j]) {
                count = count + 1;
            }
        }
    }
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log("Example:");
    console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));

    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}