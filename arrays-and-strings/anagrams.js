/*
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same chars, but in any order.
*/

const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const char_count = {};

    for (let char of str1) {
        if (!(char_count[char])) {
            char_count[char] = 0;
        }
        char_count[char] += 1;
    }

    for (let char of str2) {
        if (!(char_count[char])) {
            return false;
        }
        char_count[char] -= 1;
    }

    for (let count of Object.values(char_count)) {
        if (count !== 0) return false
    }

    return true;
}

console.log(areAnagrams('hello', 'olleh'))
console.log(areAnagrams('hello', 'heilo'))