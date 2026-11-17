let code = prompt("Enter Product Code:");

let originalCode = code.toUpperCase();
let reversedCode = "";

for (let i = originalCode.length - 1; i >= 0; i--) {
    reversedCode += originalCode[i];
}

console.log("Entered Product Code:", code);

if (originalCode === reversedCode) {
    console.log("Product Code is a Palindrome.");
} else {
    console.log("Product Code is not a Palindrome.");
}