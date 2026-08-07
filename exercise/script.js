console.log("========== Exercise 1 ==========");

const intro = document.getElementById("intro");
console.log("Intro Text:", intro.textContent);

const notes = document.querySelectorAll(".note");
console.log("Number of Notes:", notes.length);


console.log("========== Exercise 2 ==========");

const lastItem = document.querySelector("#menu li:last-child");
console.log("Last Menu Item:", lastItem.textContent);

const contact = document.querySelector("#contact-link");
console.log("Contact Link:", contact.textContent);

const menuItems = document.querySelectorAll("#menu li");
console.log("All Menu Items:", menuItems);

const tagline = document.querySelector(".highlight#tagline");
console.log("Tagline:", tagline.textContent);

const emailInput = document.querySelector('input[type="email"]');
console.log("Email Input:", emailInput);

const sendButton = document.querySelector(".actions button");
console.log("Send Button:", sendButton.textContent);


console.log("========== Exercise 3 ==========");

const title = document.getElementById("title");

title.textContent = "Fresh Title";

const fruitList = document.getElementById("fruit-list");

fruitList.innerHTML = `
<ul>
    <li>Mango</li>
    <li>Apple</li>
    <li>Guava</li>
</ul>
`;

console.log("Title Changed Successfully");
console.log("Fruit List Created");


console.log("========== Exercise 4 ==========");

const note = document.getElementById("note");
const highlightBtn = document.getElementById("highlightBtn");

highlightBtn.addEventListener("click", function () {

    note.classList.toggle("highlight");

    console.log("Highlight Toggled");

});

const swapBtn = document.getElementById("swapBtn");

const avatar = document.getElementById("avatar");

swapBtn.addEventListener("click", function () {

    avatar.setAttribute(
        "src",
        "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-d-hindu-god-radha-krishna-in-love-painting-heavenly-affection-of-image_16007748.jpg"
    );

    avatar.setAttribute(
        "alt",
        "Radha Krishna"
    );

    console.log("Image Changed Successfully.");

});


console.log("========== Exercise 5 ==========");

const taskList = document.getElementById("taskList");

const task1 = document.createElement("li");
task1.textContent = "Buy groceries";
taskList.appendChild(task1);

const task2 = document.createElement("li");
task2.textContent = "Walk the dog";
taskList.appendChild(task2);

const task3 = document.createElement("li");
task3.textContent = "Read a chapter";
taskList.appendChild(task3);

console.log("Three Tasks Added");


console.log("========== Exercise 6 ==========");

const priority = document.createElement("li");

priority.textContent = "Today's Priority";

taskList.prepend(priority);

console.log(
    "First Item:",
    taskList.firstElementChild.textContent
);

console.log(
    "Last Item:",
    taskList.lastElementChild.textContent
);


console.log("========== Exercise 7 ==========");

const middle = document.getElementById("middle");

console.log(
    "Parent ID:",
    middle.parentElement.id
);

console.log(
    "Previous Element:",
    middle.previousElementSibling.textContent
);

console.log(
    "Next Element:",
    middle.nextElementSibling.textContent
);

console.log(
    "Total Children:",
    middle.parentElement.children.length
);

console.log("DOM Traversal Completed Successfully");