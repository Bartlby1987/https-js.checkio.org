// Римские цифры пришли к нам из древней римской системы счета. Они основаны на особых буквах алфавита, которые в различных сочетаниях, путем суммирования (а иногда и разницы) описывают различные числа. Первые 10 римских чисел это:
//
//     I, II, III, IV, V, VI, VII, VIII, IX, and X.
//
//     Римская система счета имеет десятичное основание, но она непозиционная и не включает в себя 0 (ноль). Римские числа образуются путем комбинации следующих семи символов:

function romanNumerals(number) {
    let newNumber = number;
    let romanNumber = [];
    for (let i = 0; i < 20; i++) {
        if (newNumber >= 1000) {
            newNumber = newNumber - 1000;
            romanNumber.push("M");
        } else if (newNumber >= 900) {
            newNumber = newNumber - 900;
            romanNumber.push("CM");
        } else if (newNumber >= 500) {
            newNumber = newNumber - 500;
            romanNumber.push("D");
        } else if (newNumber >= 400) {
            newNumber = newNumber - 400;
            romanNumber.push("CD");
        } else if (newNumber >= 100) {
            newNumber = newNumber - 100;
            romanNumber.push("C");
        } else if (newNumber >= 90) {
            newNumber = newNumber - 90;
            romanNumber.push("XC");
        } else if (newNumber >= 50) {
            newNumber = newNumber - 50;
            romanNumber.push("L");
        } else if (newNumber >= 40) {
            newNumber = newNumber - 40;
            romanNumber.push("XL");
        } else if (newNumber >= 10) {
            newNumber = newNumber - 10;
            romanNumber.push("X");
        } else if (newNumber >= 9) {
            newNumber = newNumber - 9;
            romanNumber.push("IX");
        } else if (newNumber >= 5) {
            newNumber = newNumber - 5;
            romanNumber.push("V");
        } else if (newNumber >= 4) {
            newNumber = newNumber - 4;
            romanNumber.push("IV");
        } else if (newNumber >= 1) {
            newNumber = newNumber - 1;
            romanNumber.push("I");
        } else if (newNumber === 0) {
            return romanNumber.join('');
        }
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}
