// У вас есть определенная строка, в которой вы хотите найти средние символы. Строка может состоять как из одного слова или даже нескольких символов, так и быть целым предложением. Если длина строки четная - вам необходимо вернуть два средних символа, если же нечетная - только один. Более наглядно это описано в Примерах.
"use strict";

function middle(text) {
    let number = text.split("");
    let array=[];
    let numberInArray = 0;
    if (number.length % 2 !== 0) {
        numberInArray = ((number.length / 2).toFixed());
        return number[Number(numberInArray-1)]
    }else{
        array.push((number.length / 2).toFixed(),(((number.length / 2).toFixed())-1));
        return number[Number(array[1])]+number[Number(array[0])]
    }

}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(middle('example'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(middle('example'), 'm')
    assert.equal(middle('test'), 'es')
    assert.equal(middle('very-very long sentence'), 'o')
    assert.equal(middle('I'), 'I')
    assert.equal(middle('no'), 'no')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}