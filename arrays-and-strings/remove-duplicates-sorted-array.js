/*
Problem:
    Given an integer array nums sorted in increasing order, 
    remove the duplicates in-place such that each unique element appears only once. 
    The relative order of the elements should be kept the same. 
    Then return the number of unique elements in nums.

Edge cases:
    - empty array,
    - array with one element
    - array with all identical elements
    - array with no duplicates
    - array with two idential elemets [1, 1]
    - array with multiple duplicates and unique elements

Approach:
    Initial O(n^2):
        - if array is empty return 0;
        - iterate each element in the array start at index 1.
            check if current num is equal to the prev num:
                if yes, use the splice to delete the current num.
                if no, continue iterating.
        - return num.length.
    
    Optimized O(n):
        - if array is empty return 0;
        - use two pointers, i start at index 1 and to iterate each element in the array,
          and j start at index 1 to keep track of the unique element.
        - iterate each element in the array.
            check if current element is not a duplicate by checking if it is not equal to prev element.
                if true, we found a unique element, copy that element and place at position j, then increment j.
        - return j

Complexity:
    n = size of the input array
    Time = O(n) we iterate only once.
    Space = O(1) 

*/

// const removeDuplicates = (nums) => {
//     if (nums.length === 0) return 0;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             nums.splice(i, 1)
//         }
//     }

//     return nums.length;
// }

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let j = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i];
            j++
        }
    }

    return j;

}



const arr = [1, 1, 3, 4]

console.log(removeDuplicates(arr))
console.log(arr)