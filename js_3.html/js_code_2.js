let grades = [45, 67, 89, 32, 76, 50, 95, 62, 48];

function getAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

function getHighest(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}

function getLowest(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}

function getPassRate(grades) {
    let passCount = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 50) {
            passCount++;
        }
    }
    return (passCount / grades.length) * 100;
}

console.log("Average Grade:", getAverage(grades).toFixed(2));
console.log("Highest Grade:", getHighest(grades));
console.log("Lowest Grade:", getLowest(grades));
console.log("Pass Rate:", getPassRate(grades).toFixed(2) + "%");
