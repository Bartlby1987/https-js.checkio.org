// Во время путешествий, корпус корабля подвергается постояным нагрузкам. В результате, одной из важнейших задач при обслуживании корабля, становится проверка корпуса. Стефан использует для этого прочностоизмеритель. Это устройство сканирует участок корпуса и дает сетку распределения прочности небольших фрагментов. Времени на полноценный ремонт часто не хватает и Стефан успевает залатать только несколько точек. Так что нам нужен алгоритм поиска слабых точек.
//
//     Сетка распределения прочности представлена, как матрица с цифрами. Каждое число - это степень прочности для ячейки. Чтобы найти слабую точку, нам нужно найти самые слабые строки и столбцы. Слабая точка находится на пересечении этих линий. Прочность ряда (столбца) - это сумма прочностей ячеек в данной строке (столбце). Вам нужно найти координаты этой слабой точки (ряд и столбец). Первый ряд (столбец) является нулевым рядом (столбцом), как индексы в массиве. Если есть несколько равнозначных слабых точек, то выбирайте самую левую верхнюю точку.
//
//     Входные данные: Сетка распределения прочностей, как список (list) списков с целыми числами (int).
//
//     Выходные данные: Координаты слабой точки, как список (list) или кортеж (tuple) двух целых чисел (int).
//
//     Предусловия:
// 0 < len(matrix) ≤ 10
// all(len(row) == len(matrix) for row in matrix)
// all(all(0 < x < 10 for x in row) for row in matrix)


function weakPoint(matrix){
    let rowObj = {};
    let columnObj = {};
    for (let i = 0; i < matrix.length; i++) {
        rowObj[i] = 0;
        columnObj[i] = 0;
        for (let j = 0; j < matrix.length; j++) {
            rowObj[i] = rowObj[i] + matrix[i][j];
            columnObj[i] = columnObj[i] + matrix[j][i];
        }
    }

    function sortObj(obj) {
        let arrayObj = [];
        for (let key in obj) {
            arrayObj.push([key, obj[key]])
        }
        arrayObj.sort(function(a, b) {
            return a[1] - b[1];
        });
        return arrayObj;
    }
    let rowCoordinate=Number(sortObj(rowObj)[0][0]);
    let columnCoordinate=Number(sortObj(columnObj)[0][0]);

    return [rowCoordinate,columnCoordinate]
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
        [2, 9, 4, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]]
    ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
        [2, 8, 1, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]]
    ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]]
    ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}