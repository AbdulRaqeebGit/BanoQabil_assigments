let students = [
  { rollNo: 101, name: "Ali", marks: 75 },
  { rollNo: 102, name: "Ahmed", marks: 80 },
  { rollNo: 103, name: "Usman", marks: 65 },
  { rollNo: 104, name: "Hamza", marks: 90 },
  { rollNo: 105, name: "Hassan", marks: 55 },
  { rollNo: 106, name: "Bilal", marks: 88 },
  { rollNo: 107, name: "Abdullah", marks: 72 },
  { rollNo: 108, name: "Zain", marks: 95 },
];

let total = 100;

for (var i = 0; i < students.length; i++) {
  console.log(
    "Orignal order",
    "Roll no :",
    students[i].rollNo,
    ",Name :",
    students[i].name,
    ",marks :",
    students[i].marks,
  );
}
for (var j = students.length - 1; j > -1; j--) {
  console.log(
    "Reverse order",
    "Roll no :",
    students[j].rollNo,
    ",Name :",
    students[j].name,
    ",marks :",
    students[j].marks,
  );
}

let highest = Math.max(...students.map((student) => student.marks));
console.log("Highest marks:", highest);

let lowest = Math.min(...students.map((student) => student.marks));
console.log("lowest marks:", lowest);


for (let k = 0; k < students.length; k++) {
  if (students[k].marks >= 50) {
    console.log(students[k].name, "has passed with", students[k].marks, "out of 100");
  } else {
    console.log(students[k].name, "has failed with", students[k].marks, "out of 100");
  }
}