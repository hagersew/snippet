function longestCommonSubstring(str1, str2) {
  'use strict';

  // Initialize the table to store the lengths of the longest common substrings
  // of prefixes of str1 and str2.
  const table = [];
  for (let i = 0; i < str1.length; i++) {
    table[i] = [];
    for (let j = 0; j < str2.length; j++) {
      table[i][j] = 0;
    }
  }

  // Iterate over the strings and update the table.
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      }
    }
  }

  // Find the maximum value in the table.
  let maxLen = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (table[i][j] > maxLen) {
        maxLen = table[i][j];
      }
    }
  }

  // Return the substring of str1 that corresponds to the maximum value in the table.
  let substring = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (table[i][j] === maxLen) {
        substring = str1.slice(i, i + maxLen);
        break;
      }
    }
  }

  return substring;
}

// Example usage
const str1 = 'Hello, world!';
const str2 = 'Goodbye, world!';

const lcs = longestCommonSubstring(str1, str2);

console.log(lcs); // "world"
