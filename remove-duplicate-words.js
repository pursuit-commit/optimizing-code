/**
 * https://www.codewars.com/kata/remove-duplicate-words 
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 * 
 * @param {string} s
 * @return {string}
 */


// This is a non-optimal solution for the above problem, take some time with your group and try and come up with a better solution
export function removeDuplicateWords(s) {
    let result = [];
    s.split(' ').forEach((string, index) => {
        if (result.indexOf(string) === -1) {            
            result.push(string)
        }
    })
    return result.join(' ');
}
