/*
Write a function, fiveSort, that takes in an array of numbers as an argument.
The function should rearrange elements of the array such that all 5s appear at the end.
Your function should perform this operation in-place by mutating the original array.
The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

Use two pointers strategy.
i - start at the beginning left part of the array
j - start at the beginning right part of the array


j - decrement until find that is not 5
i - increment until find that is 5
    if 5 is found:
        swap i and j
once two pointers met stop the while loop.


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

console.log(fiveSort([12, 5, 1, 5, 12, 7]))
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]))

