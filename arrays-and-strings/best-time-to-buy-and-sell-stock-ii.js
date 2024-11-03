/*
Problem:
    You are given and integer array prices where prices[i] is the price of a given stock on the ith day.
    On each day, you may decide to buy and/or sell the stock.
    You can only hold at most one share of the stock at any time.
    However, you can buy it then immediately sell it on the same day.
    Find and return the maximum profit you can achieve.

Approach:
    - Use a single loop to iterate through the array, comparing each day's price with the next day's price.
    - If the current day's price is less than the next day's price, calculate the profit by subtracting the current price from the next day's price.
    - Add this profit to the total `maxProfit`.
    - This approach essentially simulates buying on the current day and selling on the next day when the price is higher, maximizing profit with each upward movement.
    - Continue this until the end of the array to get the total profit.

Complexity:
    n - length of the input array
    Time - O(n)
        - We traverse the array once, checking adjacent elements, so the time complexity is linear, O(n).
    Space - O(1)
        - The algorithm only uses a constant amount of additional space for variables, leading to O(1) space complexity.
*/

const maxProfit = (prices) => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currDay = prices[i];
        const nextDay = prices[i + 1]
        let profit = nextDay - currDay;
        if (currDay < nextDay) {
            maxProfit += profit;
        }
    }
    
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])) // -> 7
console.log(maxProfit([1,2,3,4,5])) // -> 4