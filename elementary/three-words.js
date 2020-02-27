// Давайте научим наших роботов отличать слова от чисел.
//
//     Дана строка со словами и числами, разделенными пробелами (один пробел между словами и/или числами). Слова состоят только из букв. Вам нужно проверить есть ли в исходной строке три слова подряд. Для примера, в строке "start 5 one two three 7 end" есть три слова подряд.
//
//     Входные данные: Строка со словами (str).
//
//     Выходные данные: Ответ как логическое выражение (bool), True или False.
//
//     Предусловия: Исходная строка содержит только слова и/или числа. Смешанных слов нет (перемешанные цифры и буквы).
// 0 < len(words) < 100

function threeWords(data) {
    let count = 0;
    let str = data.split(" ");
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            count = count + 1;
            if (count === 3) {
                return true
            }
        } else if (isNaN(str[i]) === false) {
            count = 0;
        }
    }
    return false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}