/*
Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:
<number><char>
for example: '2c', '33a'
The function should return an uncompressed version of the string where each char of a group is repeated number times consecutively. You may assume that the input string is well-formed according to the previously metioned pattern.
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
            res.push(str[j].repeat(num));
            j += 1;
            i = j;
        }
    }

    return res.join('')

}



/*
    j
3a10b
  i

*/

console.log(uncompress('2c3a1t'))
console.log(uncompress('5a'))