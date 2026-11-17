let Orignalstops = [101, 102, 103, 104, 105, 106];
console.log("Original Route:");

for (let i = 0; i < stops.length; i++) {
  console.log(stops[i]);
}

console.log("Reversed Route:");

for (let i = stops.length - 1; i >= 0; i--) {
  console.log(stops[i]);
}
