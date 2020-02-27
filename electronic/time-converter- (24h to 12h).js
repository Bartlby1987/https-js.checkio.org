// Вы предпочитаете использовать 12-часовой формат времени, но современный мир живет в 24-часовом формате и вывидите это повсюду. Ваша задача - переконвертировать время из 24-часового формата в 12-часовой, использкя следующие правила:
//     - выходной формат должен быть 'чч:мм a.m.' (для часов до полудня) или 'чч:мм p.m.' (для часов после полудня)
// - если часы меньше 10 - не пишите '0' перед ними. Например: '9:05 a.m.'
// Вы можете узнать больше подробностей о 12-часовом формате.
//
//     example
//
// Входные данные: Время в 24-часовом формате (как строка).
//
// Выходные данные: Время в 12-часовом формате (как строка).
//
// Предусловия:
//     '00:00' <= время <= '23:59'

"use strict";

function timeConverter(dayTime) {
    if (dayTime==="00:00"){
        return "12:00 a.m."
    }
    let dateObj = {12: 12, 13: 1, 14: 2, 15: 3, 16: 4, 17: 5, 18: 6, 19: 7, 20: 8, 21: 9, 22: 10, 23: 11};
    dayTime = dayTime.split(":");
    let dayTimeArray = [String(Number(dayTime[0])), dayTime[1]];
    for (let key in dateObj) {
        if (Number(key) === Number(dayTimeArray[0])) {
            return dateObj[key] + ":" + dayTimeArray[1] + " p.m."
        }
    }
    return dayTimeArray[0] + ":" + dayTimeArray[1] + " a.m."
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(timeConverter('12:30'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30'), '12:30 p.m.')
    assert.equal(timeConverter('09:00'), '9:00 a.m.')
    assert.equal(timeConverter('23:15'), '11:15 p.m.')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}