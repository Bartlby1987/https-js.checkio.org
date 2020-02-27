// Расстояние Хэмминга между двумя двоичными числами - это число число позиций, в которых биты различаются (прочитать о расстоянии Хэмминга на Википедии).
// Для примера:
//
//     117 = 0 1 1 1 0 1 0 1
// 17 = 0 0 0 1 0 0 0 1
// H = 0+1+1+0+0+1+0+0 = 3
//
// Даны два положительных целых числа (N, M) в десятичном виде. Вам необходимо подсчитать расстояние Хэмминга между этими двумя числами в двоичном виде.
//
//     Входные данные: Два аргумента, как целые числа (int).
//
//     Выходные данные: Расстояние Хэмминга, как целое число (int).
//
//     Предусловия:
// 0 < n < 106
// 0 < m < 106

function hammingDistance(n, m){
    let first=(String(Number(n).toString(2))).split("");
    let second=(String(Number(m).toString(2))).split("");
    if (first.length>second.length){
        let difLength=first.length-second.length;
        for (let i=0;i<difLength;i++){
            second.unshift("0");
        }
    }else if (second.length>first.length){
        let difLength=second.length-first.length;
        for (let i=0;i<difLength;i++){
            first.unshift("0");
        }
    }
    let counter=0;
    for (let i=0;i<second.length;i++){
        if ((first[i]-second[i])!==0){
            counter++;
        }
    }


    return counter
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(hammingDistance(117, 17), 3, "First example");
    assert.equal(hammingDistance(1, 2), 2, "Second example");
    assert.equal(hammingDistance(16, 15), 5, "Third example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}