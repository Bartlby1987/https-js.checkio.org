// There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
//
// This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.
//
//     Input: String.
//
//     Output: Int.


function longRepeat(line) {
    if (line === "") {
        return 0;
    }
    let counter = 0;
    let max = 0;
    let value = line[0];
    for (let i = 0; i < line.length; i++) {
        if (value === line[i]) {
            counter++;
        } else {
            value = line[i];
            if (counter > max) {
                max = counter;
            }
            counter = 1;
        }
    }
    if (counter > max) {
        max = counter;
    }
    return max;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}