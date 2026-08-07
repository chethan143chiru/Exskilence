document.addEventListener("DOMContentLoaded", () => {
  // 1. The Script That Runs Too Early
  const title = document.getElementById("pageTitle");
  if (title) {
    title.textContent = "Welcome!";
  }

  // 2. The Selector That Stops Counting
const items = document.querySelectorAll(".item");
console.log("Before:", items.length);
const newItem = document.createElement("li");
newItem.textContent = "Three";
newItem.className = "item";
lit.appendChild(newItem);

console.log("After:", items.length); // Still 2
console.log("Current Count:", document.querySelectorAll(".item").length); // 3

  // 3. The Reference That Went Stale
  const box = document.getElementById("box");
  box.innerHTML = '<p>Replacement paragraph</p>';

  // 4. The List That Only Grew in One Place
  const listA = document.getElementById("listA");
  const listB = document.getElementById("listB");
  const sharedItem = listA.firstElementChild;
  listB.appendChild(sharedItem.cloneNode(true));

  // 5. The Loop That Skipped Every Other Item
  const cleanupList = document.getElementById("cleanupList");
  const children = [...cleanupList.children];
  for (let item of children) {
    item.remove();
  }

  // 6. The Copy That Wasn’t a Copy
  const original = document.getElementById("original");
  const destination = document.getElementById("destination");
  const copy = original.cloneNode(true);
  copy.id = "copiedText";
  copy.textContent = "Changed!";
  destination.appendChild(copy);
});