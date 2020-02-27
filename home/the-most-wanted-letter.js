// Дан текст, который содержит различные английские буквы и знаки препинания. Вам необходимо найти самую частую букву в тексте. Результатом должна быть буква в нижнем регистре.
//     При поиске самой частой буквы, регистр не имеет значения, так что при подсчете считайте, что "A" == "a". Убедитесь, что вы не считайте знаки препинания, цифры и пробелы, а только буквы.
//
//     Если в тексте две и больше буквы с одинаковой частотой, тогда результатом будет буква, которая идет первой в алфавите. Для примера, "one" содержит "o", "n", "e" по одному разу, так что мы выбираем "e".
//
//     Вх. данные: Текст для анализа, как строка.
//
//     Вых. данные: Наиболее частая буква, как строка.
//
//     Предусловия:
// text содержит только ASCII символы.
// 0 < len(text) ≤ 105


function mostWanted(data) {
    data = data.replace(/[^a-zA-Z]/g, '');
    let reg = /.*[a-zA-Z]/;
    let str = (reg.exec(data)[0]).toLowerCase();
    let strArray = (str.split('')).sort();
    let result = {};
    for (let i = 0; i < strArray.length; ++i) {
        let a = strArray[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    function sortObj(obj) {
        let arrayObj = [];
        for (let key in obj) {
            arrayObj.push([key, obj[key]])
        }
        arrayObj.sort(function (a, b) {
            let byCount = b[1] - a[1];
            if (byCount === 0) {
                return a[0].localeCompare(b[0]);
            } else {
                return byCount;
            }
        });
        return arrayObj;
    }

    let sortObjOnValue = sortObj(result);
    console.log("src: " + JSON.stringify(result))
    console.log("sorted: " + JSON.stringify(sortObjOnValue))
    let answer=sortObjOnValue[0][0];
    return answer
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Lorem ipsum dolor sit amet"), "m", "qqq");
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}