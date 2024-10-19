/*
Problem:
    Write a function, mostFrequentChar, that takes in a string as an argument.
    The function should return the most frequent character of the string.
    If there are ties, return the character that appears earlier in the string.
    You can assume that the input string is non-empty.

Approach:
    - Use a hashmap (object) to track the frequency of each character in the string.
    - Iterate through the string to fill in the character frequencies.
    - Keep track of the most frequent character while iterating:
        - For each character, compare its frequency to the current most frequent character.
        - In case of a tie (equal frequency), choose the character that appears earlier in the string.
    - Return the most frequent character.

Complexity:
    n - length of the input string
    Time - O(n)
        - We loop through the string twice:
            - First loop: to count the frequency of each character (O(n)).
            - Second loop: to find the character with the highest frequency (O(n)).
        - So, overall time complexity is O(2n), which simplifies to O(n).
        
    Space - O(n)
        - We are storing each character and its frequency in the `charCount` hashmap.
        - In the worst case, all characters are unique, so the space complexity is O(n).
*/

const mostFrequentChar = (str) => {
    const charCount = {};
    let mostFrequent = null;

    // Fill the charCount
    for (let char of str) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char]++

    }

    // Find the most frequent character
    for (let char of str) {
        if (mostFrequent === null || charCount[char] > charCount[mostFrequent]) {
            mostFrequent = char;
        }
    }

    return mostFrequent;
}

// Test
console.log(mostFrequentChar('hello') // -> 'l'
)
console.log(mostFrequentChar('hazel') // -> 'h'
)