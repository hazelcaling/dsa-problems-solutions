/*
Problem:
    Write a function, areAnagrams, that takes in two strings as arguments.
    The function should return a boolean indicating whether or not the strings are anagrams.
    Anagrams are strings that contain the same characters, but in any order.

Approach:
    - Check if the lengths of the strings are different; if so, return false immediately.
    - Use a hashmap (object) to count the frequency of each character in the first string.
    - Iterate through the second string:
        - Decrease the character count in the hashmap.
        - If any character is not present or has a negative count, return false.
    - After iterating, check if all character counts are zero, which means the strings are anagrams.
    
Complexity:
    n - length of the input strings
    Time - O(n)
        - We loop through both strings once, resulting in linear time complexity O(n).
    Space - O(n)
        - We use a hashmap to store character frequencies, leading to O(n) space complexity.
*/

const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const char_count = {};

    // Count frequency of characters in str1
    for (let char of str1) {
        if (!(char_count[char])) {
            char_count[char] = 0;
        }
        char_count[char] += 1;
    }

    // Decrease the frequency based on str2
    for (let char of str2) {
        if (!(char_count[char])) {
            return false;
        }
        char_count[char] -= 1;
    }

    return Object.values(char_count).every(count => count === 0)
}


// Test
console.log(areAnagrams('hello', 'olleh')) // -> true
console.log(areAnagrams('hello', 'heilo')) // -> false