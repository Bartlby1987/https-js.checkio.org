// Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, заключенный между двумя этими маркерами. Но есть несколько важных условий:
//
//     Начальный и конечный маркеры всегда разные
// Если нет начального маркера, то началом считать начало строки
// Если нет конечного маркера, то концом считать конец строки
// Если нет ни конечного, ни начального маркеров, то просто вернуть всю строку
// Если конечный маркер стоит перед начальным, то вернуть пустую строку
// Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.
//
//     Output: Строка.
//
//     Предусловия: не может быть более одного маркера одного типа

function betweenMarkers(text, begin, end) {
    if (text.indexOf(begin) === -1 && text.indexOf(end) === -1) {
        let reg0 = "(.*)";
        let re = new RegExp(reg0);
        return re.exec(text)[1]
    } else if (text.indexOf(begin) === -1 && text.indexOf(end) !== 1) {
        let reg1 = "(.*)\\" + end;
        let re = new RegExp(reg1);
        return re.exec(text)[1]
    } else if (text.indexOf(begin) !== -1 && text.indexOf(end) === -1) {
        let reg2 = ".*\\" + begin + "(.*)";
        let re = new RegExp(reg2);
        return re.exec(text)[1]
    } else if (text.indexOf(begin) !== -1 && text.indexOf(end) !== -1) {
        let reg3 = ".*" + begin + "(.*)" + end;
        let re = new RegExp(reg3);
        if (re.exec(text) === null) {
            return ""
        } else {
            return re.exec(text)[1];
        }
    } else if ((text.indexOf(begin) > text.indexOf(end))) {
        return "";
    }
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
        "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}