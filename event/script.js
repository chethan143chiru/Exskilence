// ==========================================
// 1. Click Basics
// ==========================================
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");
let isFirstClick = true;

greetBtn.addEventListener("click", () => {
    if (isFirstClick) {
        output.textContent = "Hello there!";
        isFirstClick = false;
    } else {
        output.textContent = "You clicked again!";
    }
});

// ==========================================
// 2. e.target Inspector
// ==========================================
const paletteButtons = document.querySelectorAll("#palette button");
const chosen = document.getElementById("chosen");
paletteButtons.forEach((button) => {
    if (button.textContent == "Red") {
        button.style.backgroundColor = "red";
        button.style.color="white";
    }
    else if (button.textContent == "Green") {
        button.style.backgroundColor = "green";
        button.style.color="white";
        button.style.boxShadow="0 0  20px green";
    }
    else if (button.textContent == "Blue") {
        button.style.backgroundColor = "blue";
        button.style.color="white";
        button.style.fontStyle="italic";
    }
        button.addEventListener("click", (e) => {
        chosen.textContent = `Chosen: ${e.target.textContent}`;
    });
});

// ==========================================
// 3. Hover Effect
// ==========================================
const preview = document.getElementById("preview");

preview.addEventListener("mouseover", () => {
    preview.textContent = "You’re hovering!";
    preview.style.backgroundColor = "red";
});

preview.addEventListener("mouseout", () => {
    preview.textContent = "Hover over me";
    preview.style.backgroundColor = "yellow";
});

// ==========================================
// 4. Change Listener
// ==========================================
const branchSelect = document.getElementById("branchSelect");
const branchOutput = document.getElementById("branchOutput");

branchSelect.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    branchOutput.textContent = `You picked: ${selectedValue}`;
});

// ==========================================
// 5. Submit Without Reload
// ==========================================
const quickForm = document.getElementById("quickForm");
const messageInput = document.getElementById("messageInput");
const sentMessage = document.getElementById("sentMessage");

quickForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sentMessage.textContent = messageInput.value;
    messageInput.value = ""; // Optional: clear input after submit
});

// ==========================================
// 6. Live Validation
// ==========================================
const nameField = document.getElementById("nameField");
const nameError = document.getElementById("nameError");

nameField.addEventListener("change", (e) => {
    if (e.target.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
    } else {
        nameError.textContent = "";
    }
});

// ==========================================
// 7 & 8. Delegated List & Survives New Items
// ==========================================
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

// Delegation listener (Handles both initial and newly added items)
todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
});

// Add button functionality (Exercise 8)
addTodoBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        const newLi = document.createElement("li");
        newLi.textContent = taskText;
        todoList.appendChild(newLi);
        todoInput.value = "";
    }
});

// ==========================================
// Challenge — Mini Feedback Form
// ==========================================
const feedbackForm = document.getElementById("feedbackForm");
const fbName = document.getElementById("fbName");
const fbMessage = document.getElementById("fbMessage");
const nameErr = document.getElementById("nameErr");
const msgErr = document.getElementById("msgErr");
const feedbackList = document.getElementById("feedbackList");
const count = document.getElementById("count");
let feedbackCount = 0;
feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    nameErr.textContent = "";
    msgErr.textContent = "";
    const name = fbName.value.trim();
    const message = fbMessage.value.trim();
    let valid = true;
    if (name === "") {
        nameErr.textContent = "Name cannot be empty";
        valid = false;
    }
    if (message === "") {
        msgErr.textContent = "Message cannot be empty";
        valid = false;
    }

    if (!valid) {
        return;
    }

    // Increase feedback count
    feedbackCount++;
    count.textContent = feedbackCount;

    // Create feedback item
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${name}</strong>: ${message}
        <button class="deleteBtn">Delete</button>
    `;

    feedbackList.appendChild(li);

    fbName.value = "";
    fbMessage.value = "";
});

// Event Delegation for Delete
feedbackList.addEventListener("click", function (e) {

    if (e.target.classList.contains("deleteBtn")) {

        e.target.parentElement.remove();

        feedbackCount--;
        count.textContent = feedbackCount;

    }

});
