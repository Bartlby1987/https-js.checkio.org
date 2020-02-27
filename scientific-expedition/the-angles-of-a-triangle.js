// Даны длины сторон треугольника и необходимо найти углы треугольника. Если невозможно сформировать треугольник из данных сторон (или для вырожденного треугольника), тогда результатом должны быть все нули. Результат должен быть представлен, как список (list) целых чисел в возрастающем порядке. Углы должны быть записаны в градусах и округляются до целого числа (стандартное округление).
//
// Входные данные: Длины сторон треугольник, как целые числа (int).
//
//     Выходные данные: Углы данного треугольника в градусах, как сортированный список (list) целых чисел (int).
//
//     Предусловия:
// 0 < a,b,c ≤ 1000

function triangleAngles(a, b, c) {
    let biggest = 0;
    let p = (a * b + b * c + a * c) / 2;
    let cosAlfa = ((b * b + c * c) - (a * a)) / (2 * b * c);
    let cosBeta = (((b * b) + (a * a)) - (c * c)) / (2 * b * a);
    let arcCosAlfa = Math.acos(cosAlfa);
    let arcCosBeta = Math.acos(cosBeta);
    let alfa = (arcCosAlfa * 180) / Math.PI;
    let beta = (arcCosBeta * 180) / Math.PI;
    let gamma = 180 - (alfa + beta);
    if (a === b && a === c) {
        return [60, 60, 60]
    }
    if (a > b && a > c) {
        biggest = a;
    } else if (b > a && b > c) {
        biggest = b;
    } else if (c > a && c > b) {
        biggest = c;
    }
    if (a + b <= c || a + c <= b || b + c <= a || biggest === p) {
        return [0, 0, 0]
    }
    let result = [Number(alfa.toFixed()), Number(gamma.toFixed()), Number(beta.toFixed())];
    let comparator =(a,b)=> a-b;
    return result.sort(comparator);
}


console.log(triangleAngles(4, 4, 4));//[60,60,60]
console.log(triangleAngles(3, 4, 5));//[37, 53, 90]
console.log(triangleAngles(5, 4, 3));//[37, 53, 90]
console.log(triangleAngles(2, 2, 5));//[0, 0, 0]