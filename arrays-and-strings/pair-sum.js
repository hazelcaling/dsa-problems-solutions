/*
Problem:
    Write a function, pairSum, that takes in an array and a target sum as arguments. 
    The function should return an array containing a pair of indices whose elements sum to the given target.
    The indices returned must be unique.
    Be sure to return the indices, not the elements themselves.
    There is guaranteed to be one such pair that sums to the target.

Approach:
    - Create a hash map to store previously encountered numbers and their indices.
    - Iterate through the array:
        - For each element, compute its complement (i.e., target - current number).
        - Check if the complement exists in the hash map:
            - If yes, return the current index and the index of the complement as a pair.
            - If no, add the current number and its index to the hash map.
        - This ensures that we find the correct pair in a single pass through the array.
    - The solution leverages a hash map for efficient lookup of complements, ensuring a linear time complexity.

Complexity:
    n - number of elements in the input array
    Time - O(n)
         - We iterate through the array once, and each lookup and insertion in the hash map takes O(1) time on average.
    Space - O(n)
        - We store up to n elements in the hash map in the worst case.
*/

const pairSum = (nums, target) => {
    const prevNums = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (complement in prevNums) {
            return [prevNums[complement], i]
        } else {
            prevNums[num] = i;
        }
    }

    return null;
}


// Test cases
console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)) // -> [3, 5]

