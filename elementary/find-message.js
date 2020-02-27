// Когда-нибудь пробовали отправить секретное сообщение кому-то не пользуясь услугами почты? Вы можете использовать газету, чтобы рассказать кому-то свой секрет. Даже если кто-то найдет ваше сообщение, легко отмахнуться и сказать что это паранойя и теория заговора. Один из самых простых способов спрятать ваше секретное сообщение это использовать заглавные буквы. Давайте найдем несколько таких секретных сообщений.
//
//     Дан кусок текста. Соберите все заглавные буквы в одно слово в том порядке как они встречаются в куске текста.
//
//     Например: текст = "How are you? Eh, ok. Low or Lower? Ohhh.", если мы соберем все заглавные буквы, то получим сообщение "HELLO".
//
//     Входные данные: Текст как строка (юникод).
//
//     Выходные данные: Секретное сообщение как строка или пустая строка.
//
//     Предусловие: 0 < len(text) ≤ 1000
// all(ch in string.printable for ch in text)

"use strict";

function findMessage(data) {
    let str = data.trim();
    let newStr = str.split("");
    let newRegStr = "";
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].toUpperCase() === newStr[i]) {
            newRegStr = (newRegStr + newStr[i]).trim();
        }
    }
    let stroka = newRegStr.replace(/[^\w\s]|_/g, "");
    let novayaStroka = stroka.replace(/[0-9]/g, '');
    return novayaStroka
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))

    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}