/**
 * https://leetcode.com/problems/two-sum/ 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// This is a non-optimal solution for the above problem, take some time with your group and try and come up with a better solution
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
};