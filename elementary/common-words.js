// Продолжим изучение слов. Даны две строки со словами, разделенными запятыми. Попробуйте найти что общего между этими строками. Слова внутри каждой строки не повторяются.
//
//     Ваша функция должна находить все слова, которые появляются в обеих строках. Результат должен быть представлен, как строка со словами разделенными запятыми и отсортированными в алфавитном порядке.
//
//     Вх. данные: Два аргумента как строки (str).
//
//     Вых. данные: Общие слова как строка (str).
//
//     Предусловия:
// Каждая строка содержит не более 10 слов.
//     Все слова разделены запятыми.
//     Все слова состоят только из латинских букв в нижнем регистре.

"use strict";

function commonWords(first, second) {
    let firstArray = first.split(",");
    let secondArray = second.split(",");
    let strArray = [];
    let str = "";
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                strArray.push(firstArray[i])
            }
        }
    }
    strArray=strArray.sort();
    for (let q = 0; q < strArray.length; q++) {
        str=str+","+strArray[q]
    }
    return str.slice(1);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}