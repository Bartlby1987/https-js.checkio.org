// Determine whether the sequence of elements items is ascending so that its each element is strictly larger than (and not merely equal to) the element that precedes it.
//
//     Input: Iterable with ints.
//
//     Output: Bool.
//
//     The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education by Ilkka Kokkarinen

"use strict";

function isAscending(items) {
    if (items.length === 0) {
        return true;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]>=items[i+1]){
            return false;
        }
    }

    return true;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(isAscending([-5, 10, 99, 123456]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(isAscending([-5, 10, 99, 123456]), true)
    assert.equal(isAscending([99]), true)
    assert.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false)
    assert.equal(isAscending([]), true)
    assert.equal(isAscending([1, 1, 1, 1]), false)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}