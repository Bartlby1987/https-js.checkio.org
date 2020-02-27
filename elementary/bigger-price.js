// Дана таблица всех доступных продуктов на складе. Данные представлены в виде массива объектов (array of objects)
//
// Ваша миссия тут - это найти ТОП самых дорогих товаров. Количество товаров, которые мы ищем, будет передано в первом аргументе, а сами данные по товарам будут переданы вторым аргументом.
//
//     Вх. данные: Число и массив объектов (Integer and array of objects). У каждого объекта 2 атрибута "name" и "price"
//
// Вых. данные: Такой же как и второй аргумент.

function biggerPrice(limit, data) {
    data.sort(function (a, b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    });
    let array=data.slice(-limit);
    array.sort(function (a, b) {
        if (a.price < b.price) {
            return 1;
        }
        if (a.price > b.price) {
            return -1;
        }
        return 0;
    });
    return array;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]))

    assert.deepEqual(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]), [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ])
    assert.deepEqual(biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]), [{"name": "whiteboard", "price": 170}])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}