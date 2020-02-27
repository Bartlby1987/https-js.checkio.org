// "Fizz buzz" это игра со словами, с помощью которой мы будем учить наших роботов делению. Давайте обучим компьютер.
//
//     Вы должны написать функцию, которая принимает положительное целое число и возвращает:
//     "Fizz Buzz", если число делится на 3 и 5;
// "Fizz", если число делится на 3;
// "Buzz", если число делится на 5;
// Число, как строку для остальных случаев.
//     Входные данные: Число, как целочисленное (int).
//
//     Выходные данные: Ответ, как строка (str).
//
//     Предусловия: 0 < number ≤ 1000
//
"use strict";

function fizzBuzz(data) {
    let num=data%3;
    let number=data%5;
    if (num===0 && number===0 ){
        return "Fizz Buzz";
    }else if(num===0){
        return "Fizz";
    } else if (number===0){
        return "Buzz";
    }else{
        return String(data);
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}