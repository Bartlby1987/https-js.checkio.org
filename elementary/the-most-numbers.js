// Давайте поработаем с числами.
//
//     Дан массив чисел (float или/и int). Вам нужно найти разницу между самым большим (максимум) и самым малым (минимум) элементом. Ваша функция должна уметь работать с неопределенным количеством аргументов. Если аргументов нет, то функция возвращает 0 (ноль).
//
//     Числа с плавающей точкой представлены в компьютерах как двоичная дробь. Результат проверяется с точностью до третьего знака, как ±0.001
// Прочитайте о том как работать с переменым числом аргументов.
//
//     Вх. данные: Переменное число аргументов как числа (int, float).
//
//     Вых. данные: Разница между максимумом и минимумом как число (int, float).
//
//     Предусловия: 0 ≤ len(args) ≤ 20
// all(-100 < x < 100 for x in args)
// all(isinstance(x, (int, float) 100 for x in args)

function mostNumbers(...numbers) {
    if (numbers.length===0){
        return 0}
    function compareNumbers(a, b) {
        return a - b;
    }
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        array.push(numbers[i]);
    }
    array = array.sort(compareNumbers);
    return array[array.length - 1] - array[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
    assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
    assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000), 12400, "10.2-(-2.2)=12.4");
    assert.equal(mostNumbers(), 0, "Empty");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}