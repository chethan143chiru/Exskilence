console.log("Exercise 1");
const nums = [4, 9, 15, 23, 42];
for (let i = 0; i < nums.length; i++) {
    console.log(`Index ${i}: ${nums[i]}`);
}


console.log("Exercise 2");
let index = 0;
let total = 0;
while (index < nums.length) {
    total += nums[index];
    index++;
}
console.log("Total =", total);


console.log("Exercise 3");
const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


console.log("Exercise 4");
const scores = [88, 45, 92, -1, 76];
console.log("Using break");
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === -1) {
        break;
    }
    console.log(scores[i]);
}
console.log("");
console.log("Using continue");
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 0) {
        continue;
    }
    console.log(scores[i]);
}


console.log("Exercise 5");
const tasks = [
    "Buy milk",
    "Walk the dog",
    "Read a chapter"
];
const taskList = document.getElementById("taskList");
if (taskList) {
    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}


console.log("Exercise 6");
const marks = [62, 78, 55, 90, 41];
const boostedMarks = marks.map(function(mark) {
    return mark + 5;
});
console.log("Original Marks");
console.log(marks);
console.log("");
console.log("Boosted Marks");
console.log(boostedMarks);


console.log("Exercise 7");
const passedMarks = boostedMarks.filter(function(mark) {
    return mark >= 40;
});
console.log(passedMarks);


console.log("Exercise 8");
const finalMarks = marks
.map(function(mark) {
    return mark + 5;
})
.filter(function(mark) {
    return mark >= 40;
});
console.log(finalMarks);
console.log("Challenge");
const prices = [
    249,
    899,
    120,
    45,
    1500,
    60
];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 500) {
        sum += prices[i];
    }
}
console.log("Using For Loop");
console.log(sum);
const totalPrice = prices
.filter(function(price) {
    return price < 500;
})
.reduce(function(sum, price) {
    return sum + price;
}, 0);
console.log("");
console.log("Using Filter + Reduce");
console.log(totalPrice);
console.log("");
console.log(sum === totalPrice);
console.log("");
console.log("The filter and reduce version is easier to read because it clearly separates filtering and summing operations.");