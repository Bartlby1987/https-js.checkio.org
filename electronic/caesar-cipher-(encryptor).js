// Эта миссия является частью набора задач. Другая задача - Caesar cipher decriptor.
//
//     Ваша миссия - зашифровать текст сообщения (в исходных данных не будет специальных символов вроде "!", "&", "?", только текст и пробелы) используя шифр Цезаря где каждая буква исходного текста заменяется другой, которая находится на определенном расстоянии в алфавите. Например, ("a b c", 3) == "d e f"
//
// example
//
// Входные данные: Секретное сообщение как строка (только маленькие буквы и пробелы)
//
// Output: Тот же самый текст, но зашифрованный
//
// Предусловия:
//     0 < text < 50
//     -26 < delta < 26
"use strict";

function toEncrypt(text, delta) {
    text = text.split("");
    let alphabet = {
        "0": "a", "1": "b", "2": "c", "3": "d", "4": "e", "5": "f", "6": "g", "7": "h", "8": "i", "9": "j", "10": "k", "11": "l", "12": "m",
        "13": "n", "14": "o", "15": "p", "16": "q", "17": "r", "18": "s", "19": "t", "20": "u", "21": "v", "22": "w", "23": "x", "24": "y", "25": "z"
    };
    let newArray=[];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            newArray.push(" ");
        }
        for (let key in alphabet) {
            if (alphabet[key] === text[i] && delta >= 0) {
                let newNumber = String((Number(key) + delta));
                if (Number(newNumber) > 26) {
                    newNumber = String((Number(newNumber) - 26));
                    newArray.push(alphabet[newNumber]);
                }
                else if (Number(newNumber)<=26){
                    newArray.push(alphabet[newNumber]);
                }
            }
            if (alphabet[key] === text[i] && delta < 0){
                let newNumber = String(Number(key) + delta);
                if (newNumber>=0){
                    newArray.push(alphabet[newNumber]);
                }if (newNumber<0){
                    newNumber=String((26+Number(newNumber)));
                    newArray.push(alphabet[newNumber]);
                }
            }
        }
    }
    return newArray.join("");
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(toEncrypt('abc', 10))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(toEncrypt("a b c", 3), "d e f")
    assert.equal(toEncrypt("a b c", -3), "x y z")
    assert.equal(toEncrypt("simple text", 16), "iycfbu junj")
    assert.equal(toEncrypt("important text", 10), "swzybdkxd dohd")
    assert.equal(toEncrypt("state secret", -13), "fgngr frperg")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}