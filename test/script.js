const preview = document.getElementById('preview');

preview.addEventListener('mouseover', () => {
    preview.textContent = "You’re hovering!";
    preview.style.backgroundColor = "red";
});

preview.addEventListener('mouseout', () => {
    preview.textContent = "Hover over me";
    preview.style.backgroundColor = "yellow";
});