// Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, заключенный между двумя этими маркерами. Но есть несколько важных условий.
//
//     Это упрощенная версия миссии Between Markers.
//
//     Начальный и конечный маркеры всегда разные.
//     Начальный и конечный маркеры всегда размером в один символ.
//     Начальный и конечный маркеры всегда есть в строке и идут один за другим.
//     Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.
//
//     Output: Строка.
//
//     Предусловия: Не может быть более одного маркера одного типа.
function betweenMarkers(text, begin, end) {

    let reg=".*\\"+begin+"(.*)\\"+end;
    let re = new RegExp(reg);
    return re.exec(text)[1];
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
    assert.equal(betweenMarkers('What is ><', '>', '<'), '')
    assert.equal(betweenMarkers('>apple<', '>', '<'), 'apple')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}