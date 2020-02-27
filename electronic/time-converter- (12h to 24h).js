// Вы современый человек, предпочитающий использовать 24-часовой формат времени. Но в некоторых регионах используют 12-часовой формат. Ваша задача - переконвертировать время из 12-часового формата в 24-часовой, используя следующие правила:
//     - выходной формат должен быть 'чч:мм'
// - если часы меньше 10 - допишите '0' перед ними. Например: '09:05'
// Вы можете узнать больше подробностей о 12-часовом формате.
//
//     example
//
// Входные данные: Время в 12-часовом формате (как строка).
//
// Выходные данные: Время в 24-часовом формате (как строка).
//
// Предусловия:
//     '00:00' <= время <= '23:59'
"use strict";

function timeConverter(dayTime) {
    if (dayTime==="12:00 a.m."){
        return "00:00"
    }


    let dateObj = {1: 13, 2: 14, 3: 15, 4: 16, 5: 17, 6: 18, 7: 19, 8: 20, 9: 21, 10: 22, 11: 23};
    dayTime = dayTime.split(" ");
    if (dayTime[1] === "p.m.") {
        dayTime = dayTime[0].split(":");
        for (let key in dateObj) {
            if (Number(key) === Number(dayTime[0])) {
                return dateObj[key] + ":" + dayTime[1];
            }
        }
        return dayTime[0] + ":" + dayTime[1];

    } else if (dayTime[1] === "a.m.") {
        dayTime = dayTime[0].split(":");
        if (dayTime[0].length === 1) {
            dayTime.unshift("0");
            return dayTime[0] + dayTime[1] + ":" + dayTime[2]
        } else {
            return dayTime[0] + ":" + dayTime[1];
        }
    }
    return dayTime
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(timeConverter('12:30 p.m.'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30 p.m.'), '12:30')
    assert.equal(timeConverter('9:00 a.m.'), '09:00')
    assert.equal(timeConverter('11:15 p.m.'), '23:15')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}