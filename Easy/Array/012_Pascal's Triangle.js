//! Q118.Given an integer numRows, return the first numRows of Pascal's triangle.
//! TOPICS ==> [Array, Dynamic Programming]

//! Defination: In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

const generatePascalTriangle = (numRows) => {
  if (numRows <= 0) {
    return [];
  }

  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = result[i - 1];
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);
    result.push(row);
  }

  return result;
};

//! Let's test the function with the given examples:
let numRows = 5;
console.log(generatePascalTriangle(numRows));
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

numRows = 1;
console.log(generatePascalTriangle(numRows));
// Output: [[1]]
