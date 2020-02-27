// На вход Вашей функции будет передано одно предложение. Необходимо вернуть его исправленную копию так, чтобы оно всегда начиналось с большой буквы и заканчивалось точкой.
//
//     Обратите внимание на то, что не все исправления необходимы. Если предложение уже заканчивается на точку, то добавлять еще одну не нужно, это будет ошибкой
//
// Входные аргументы: Строка (A string).
//
// Выходные аргументы: Строка (A string).
//
// Предусловия: В начале и конце нет пробелов, текст состоит только из пробелов, a-z A-Z , и .
"use strict";

function correctSentence(text) {
    let str = text.trim();
    let newStr = str.split('');
    let newString="";
    newStr[0]=newStr[0].toUpperCase();
    if (newStr[newStr.length-1]!=="."){
        newStr.push(".")
    }
    for (let i = 0; i < newStr.length; i++) {
        newString=newString+newStr[i]
    }
    return newString

}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}