// Дано положительное целое число. Вам необходимо подсчитать произведение всех цифр в этом числе, за исключением нулей.
//
//     Для примера: Дано число 123405. Результат будет: 1*2*3*4*5=120 (не забудьте исключить нули).
//
// Входные данные: Положительное целое число.
//
//     Выходные данные: Произведение цифр как целочисленное (int).
//
//     Предусловия: 0 < number < 106

"use strict";

function digitsMultip(data) {
    let str=String(data);
    str=str.split("");
    let newStr=[];
    let mult=1;
    for (let i=0;i<str.length;i++){
        if (str[i]!=="0"){
            newStr.push(str[i])
        }
    }
    for(let j=0;j<newStr.length;j++){
        mult=mult*Number(newStr[j]);
    }
    return mult;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))

    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}