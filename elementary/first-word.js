// Дана строка и нужно найти ее первое слово.
//
//     Это упрощенная версия миссии First Word.
//
//     Строка состоит только из английских символов и пробелов.
//     В начале и в конце строки пробелов нет.
//     Входные параметры: Строка.
//
//     Выходные параметры: Строка.
//
//     Precondition: Text can contain a-z, A-Z and spaces.


function firstWord(a, b) {
    let array=a.split(" ");
    return array[0];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord("a word"), "a")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}