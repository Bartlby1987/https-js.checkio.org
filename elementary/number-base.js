// Помните про основание системы счисления и сами системы счисления из уроков математики? Давайте попрактикуемся.
//
//     Дано положительное число как строка и основание системы счисления для него. Ваша функция должна конвертировать это число в десятичную систему счисления. Основание системы счисления меньше 37 и больше 1. В задаче используются цифры и буквы A-Z внутри строчного представления числа.
//
//     Будьте осторожны со случаями, когда число нельзя сконвертировать. Для примера: "1A" не может быть сконвертировано при основании системы счисления 9. В этих случаях ваша функция должна возвращать -1.
//
// Замечания: Вы легко решите эту задачу при помощи int() конвертации и обработки исключений (Взгляните на ValueError).
//
// Вх. данные: Два аргумента. Число как строка (str) и основание системы счисления как целочисленное (int).
//
//     Вых. данные: Сконвертированное число как целочисленное (int).
//
// numberRadix("AF", 16) == 175
// numberRadix("101", 2) == 5
// numberRadix("101", 5) == 26
// numberRadix("Z", 36) == 35
// numberRadix("AB", 10) == -1
// Предусловия:
//     re.match("\A[A-Z0-9]\Z", str_number)
// 0 < len(str_number) ≤ 10
// 2 ≤ radix ≤ 36
"use strict";

function numberRadix(x, base){
    let arrayX=x.split("");
    for (let i=0;i<arrayX.length;i++){
        if (isNaN(parseInt(arrayX[i], base))){
            return -1
        }
    }
    return parseInt(x, base);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}