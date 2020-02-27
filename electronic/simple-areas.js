// Стефан постоянно работает с простыми фигурами, когда строит что либо. И ему не помешал бы специальный калькулятор для расчетов расхода материалов. Давайте вспомним знания полученные на школьной скамье и достанем оттуда геометрию.
//
//     Вам нужно написать функцию для подсчета площади простых фигур: круга, прямоугольника и треугольника. Дано различное число аргументов и в зависимости от их числа, ваша функция должна считать площадь различных фигур.
//
//     Один аргумент -- диаметр круга и нужно рассчитать площадь круга.
//     Два аргумента -- стороны прямоугольника и нужна площадь этого прямоугольника.
//     Три аргумента -- длины сторон треугольника и нужно рассчитать площадь треугольника.
//     Результат должен быть с точностью до ±0.01.
//
//     Примечания: Думаю вы знаете, как работать с переменным числом аргументов.
//
//     Входные данные: Один, два или три аргумента, как числа (int, float).
//
//     Выходные данные: Площадь фигуры, как число (float, int).
//
//     Предусловия:
// 0 < len(args) ≤ 3
// all(0 < x ≤ 1000 for x in args)
//     Для случая с треугольником, любые две стороны в сумме больше третей.
//



"use strict";

function simpleAreas(...args) {
    if (args.length === 1) {
        let pi = 3.141592653589793;
        let r = (args[0] / 2);
        let result=r*r*pi;
        result=result*1000;
        result=Math.round(result);
        result=result/1000;
        return Number((result.toFixed(2)));
    }
    if (args.length === 2) {
        return (args[0] * args[1])
    }
    if (args.length === 3) {
        let a=args[0];
        let b=args[1];
        let c=args[2];
        let p=(a+b+c)/2;
        return Math.sqrt((p*(p-a)*(p-b)*(p-c)));
    }

}

var assert = require('assert');
    var test1 = almostEqual(simpleAreas(3), 7.07)
    var test2 = almostEqual(simpleAreas(2, 2), 4)
    var test3 = almostEqual(simpleAreas(2, 3), 6)
    var test4 = almostEqual(simpleAreas(3, 5, 4), 6)
    var test5 = almostEqual(simpleAreas(1.5, 2.5, 2), 1.5)

    assert.equal(test1, true)
    assert.equal(test2, true)
    assert.equal(test3, true)
    assert.equal(test4, true)
    assert.equal(test5, true)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
