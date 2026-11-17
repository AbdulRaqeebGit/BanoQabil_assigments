let sales = [
  [12000, 15000, 11000, 14000], // Branch 1
  [10000, 18000, 16000, 13000], // Branch 2
  [17000, 14000, 19000, 16000], // Branch 3
];
let highestBranch = 0;
let highestSales = 0;

for (let i = 0; i < sales.length; i++) {
  let sum = 0;
  for (let j = 0; j < sales[i].length; j++) {
    console.log("Branch:", i + 1, "Day:", j + 1, "Sales:", sales[i][j]);
    sum += sales[i][j];
  }
  console.log("Total sales of Branch ", i + 1, ":", sum);
  if (sum > highestSales) {
    highestSales = sum;
    highestBranch = i + 1;
  }
}

console.log("Highest Sales Branch:", highestBranch);
console.log("Highest Total Sales:", highestSales);
