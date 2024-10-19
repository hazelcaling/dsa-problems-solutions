/*
Problem:
    Write a function, uncompress, that takes in a string as an argument.
    The input string will be formatted into multiple groups according to the following pattern:
    <number><char>, for example: '2c', '33a'.
    The function should return an uncompressed version of the string where each char of a group 
    is repeated number times consecutively. You may assume that the input string is well-formed 
    according to the previously mentioned pattern.

Approach:
    - Initialize two pointers, i and j, to track the current indices in the string.
    - Use an array to collect the result.
    - Iterate through the string using j to identify the current character:
        - If the current character is a digit, continue incrementing j.
        - Once a character (not a digit) is found, slice the string from i to j to get the number,
          repeat the character by that number, and push the result into the array.
        - Update i to the current position of j.
    - Join the array into a string and return it.

Complexity:
    n - length of the input string
    Time - O(n)
        - We traverse the string a single time to construct the result.
    Space - O(n)
        - The space used is proportional to the size of the output string.
*/

const uncompress = (str) => {
    let j = 0;
    let i = 0;
    const res = [];
    const numbers = '0123456789'

    while (j < str.length) {
        const currChar = str[j];
        if (numbers.includes(currChar)) {
            j += 1;
        } else {
            const num = str.slice(i, j)
            res.push(currChar.repeat(num));
            j += 1;
            i = j;
        }
    }

    return res.join('')

}

// Test cases
console.log(uncompress('2c3a1t')) // -> 'ccaaat'
console.log(uncompress('5a')) // -> 'aaaaa'