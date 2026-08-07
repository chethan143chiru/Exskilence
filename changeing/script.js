const note = document.getElementById("note");
const button = document.getElementById("addBtn");
button.addEventListener("click", function () {
    note.classList.add("highlight");
});