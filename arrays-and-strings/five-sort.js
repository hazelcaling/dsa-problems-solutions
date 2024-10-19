/*
Problem:
    Write a function, fiveSort, that takes in an array of numbers as an argument.
    The function should rearrange the elements of the array such that all 5s appear at the end.
    The function should perform this operation in-place by mutating the original array.
    The function should return the array.

Approach:
    - Use the two-pointer strategy:
        - Initialize two pointers, `i` at the start (left) of the array and `j` at the end (right).
        - Increment `i` until a 5 is found.
        - Decrement `j` until an element that is not 5 is found.
        - If a 5 is found at `i`, swap it with the element at `j`.
        - Continue until the two pointers meet.

Complexity:
    n - length of the input array
    Time - O(n)
        - We traverse the array at most twice, leading to linear time complexity O(n).
    Space - O(1)
        - The operation is performed in-place without using extra space for another array.
*/

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[j] === 5) {
            j--
        } else if (nums[i] === 5) {
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
        } else {
            i++
        }
    }

    return nums
}

// Test cases
console.log(fiveSort([12, 5, 1, 5, 12, 7])) // -> [12, 1, 12, 7, 5, 5]
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])) // -> [2, 6, 1, 10, 2, 5, 5, 5, 5, 5]

