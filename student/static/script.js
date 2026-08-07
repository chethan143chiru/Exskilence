async function load(sort = "roll_no") {

    const response = await fetch("/api/students?sort=" + sort);

    const students = await response.json();

    const table = document.getElementById("data");

    table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

    for (const student of students) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.roll_no}</td>
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.semester}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.cgpa}</td>
        `;

        table.appendChild(row);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    load();

});