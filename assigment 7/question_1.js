let temperature = [28, 30, 32, 29, 31, 27, 33];

let totalTemp = 0;

for (var i = 0; i < temperature.length; i++) {
    console.log("Day " + (i + 1) + " temperature is:", temperature[i]);

    totalTemp += temperature[i];
}

let average = (totalTemp / temperature.length).toFixed(2);

console.log("Average temperature is:", average);

let count = 0;

for (var i = 0; i < temperature.length; i++) {
    if (temperature[i] > average) {
        count++;
    }
}

console.log("Days above average:", count);
