// You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.
//
//     Input: non empty Array of strings.
//
//     Output: a string.

function mostFrequent(data) {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        obj[data[i]] = 0;
        for (let j = 0; j < data.length; j++) {
            if (data[i] === data[j]) {
                obj[data[i]] = obj[data[i]] + 1
            }
        }
    }
    let sortable = [];
    for (let key in obj) {
        sortable.push([key, obj[key]]);
    }

    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    return sortable[sortable.length-1][0]
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]))

    assert.equal(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}