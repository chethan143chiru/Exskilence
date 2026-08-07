// ============================================================================
// Student Portal — build this file up day by day.
// This same file is loaded on every page (see templates/base.html), so code
// that only makes sense on one page (e.g. the dashboard's `students` array)
// must be guarded so it doesn't crash the other pages.
//
// Each day's exact task is in that day's "Project Task" section in the
// course notes. Add your code under the matching heading below, in order,
// and don't delete the headers above it.
// ============================================================================

// ---------------------------------------------------------------------------
// Week 1 · Day 1 — JS Basics & Variables
// ---------------------------------------------------------------------------
console.log("\n===== Week 1 · Day 1 =====");
const appName = "Student Portal";
let pageLoadCount = 0;
pageLoadCount++;
console.log(
    `${appName} loaded successfully. Page load count: ${pageLoadCount}`
);
const projectName = "Student Marks & Course Dashboard";
console.log(`Project Name: ${projectName}`);
let currentPage = "Student Portal";
console.log(`Current Page: ${currentPage}`);
currentPage = document.title;
console.log(`Browser Page Title: ${currentPage}`);
console.log(
    `${appName} | ${projectName} | Load Count: ${pageLoadCount}`
);

// ---------------------------------------------------------------------------
// Week 1 · Day 2 — Data Types
// ---------------------------------------------------------------------------
if (typeof students !== "undefined") {
    console.log("\n===== Week 1 · Day 2 =====");
    console.log("typeof students:", typeof students);
    console.log("students.length:", students.length);
    if (students.length > 0) {
        console.log("Student Name:", students[0].name);
        console.log(
            "typeof students[0].name:",
            typeof students[0].name
        );
        console.log(
            "typeof students[0].semester:",
            typeof students[0].semester
        );
        console.log(
            "students[0].email is truthy:",
            Boolean(students[0].email)
        );
    } else {
        console.log("Students array is empty.");
    }
} else {
    console.log("Students array does not exist on this page.");
}

// ---------------------------------------------------------------------------
// Week 1 · Day 3 — Operators I
// ---------------------------------------------------------------------------
if (typeof students !== "undefined") {
    console.log("\n===== Week 1 · Day 3 =====");
    if (students.length > 0) {
        console.log("Student Name =", students[0].name);
        console.log("Branch =", students[0].branch);
        console.log("Semester =", students[0].semester);
        console.log("Email =", students[0].email);
        console.log("HTML Marks =", students[0].marks.HTML);
        console.log("CSS Marks =", students[0].marks.CSS);
        console.log("JavaScript Marks =", students[0].marks.JavaScript);
        let total =
            students[0].marks.HTML +
            students[0].marks.CSS +
            students[0].marks.JavaScript;
        console.log("Total Marks =", total);
        console.log("Total >= 200 =", total >= 200);
        console.log("Total === 240 =", total === 240);
    } else {
        console.log("Students array is empty.");
    }
} else {
    console.log("Students array does not exist on this page.");
}

// ---------------------------------------------------------------------------
// Week 1 · Day 4 — Operators II & Functions
// ---------------------------------------------------------------------------
if (typeof students !== "undefined") {
    console.log("\n===== Week 1 · Day 4 =====");
    if (students.length > 0) {
        let total =
            students[0].marks.HTML +
            students[0].marks.CSS +
            students[0].marks.JavaScript;
        function getGrade(total) {
            if (total >= 240) {
                return "A";
            } else if (total >= 180) {
                return "B";
            } else if (total >= 120) {
                return "C";
            } else {
                return "F";
            }
        }
        let grade = getGrade(total);
        console.log("Student Name =", students[0].name);
        console.log("Total Marks =", total);
        console.log("Grade =", grade);
    } else {
        console.log("Students array is empty.");
    }
} else {
    console.log("Students array does not exist on this page.");
}

/// ---------------------------------------------------------------------------
// Week 1 · Day 5 — Functions Deep Dive & DOM Intro
// ---------------------------------------------------------------------------
if (typeof students !== "undefined") {
console.log("\n===== Week 1 · Day 5 =====");
console.log("Page title:", document.title);
const heading = document.querySelector("h1");
if (heading) {
    console.log("Heading text:", heading.textContent);
} else {
    console.log("No <h1> element found.");
}
    if (students.length > 0) {
        let total =
            students[0].marks.HTML +
            students[0].marks.CSS +
            students[0].marks.JavaScript;
        const getGradeArrow = (total) => {
            if (total >= 240) {
                return "A";
            }
            if (total >= 180) {
                return "B";
            }
            if (total >= 120) {
                return "C";
            }
            return "F";
        };
        let grade = getGradeArrow(total);
        console.log("Student Name:", students[0].name);
        console.log("Total Marks:", total);
        console.log("Grade:", grade);
    } else {
        console.log("Students array is empty.");
    }
} else {
    console.log("Students array does not exist on this page.");
}

// ---------------------------------------------------------------------------
// Week 2 · Day 1 — DOM Selection & First Events
// ---------------------------------------------------------------------------
if (typeof students !== "undefined") {
    console.log("\n===== Week 2 · Day 1 =====");
    function renderFirstCard() {
        const cardContainer =
            document.getElementById("cardContainer");
        if (!cardContainer) {
            console.log("cardContainer not found.");
            return;
        }
        if (students.length === 0) {
            cardContainer.innerHTML =
                "<p>No students available.</p>";
            return;
        }
        const student = students[0];
        cardContainer.innerHTML = `
            <div class="card">
                <h3>${student.name}</h3>
                <p><strong>Branch:</strong> ${student.branch}</p>
                <p><strong>Semester:</strong> ${student.semester}</p>
                <a class="btn"
                   href="/students/${student.id}">
                    View Details
                </a>
            </div>
        `;
        console.log("First student card rendered.");
    }
    renderFirstCard();
    const sortBtn =
        document.getElementById("sortBtn");
    if (sortBtn) {
        sortBtn.addEventListener("click", () => {
            console.log("Sort button clicked.");
            renderFirstCard();
        });
    }
}

// ---------------------------------------------------------------------------
// Week 2 · Day 2 — Events Deep Dive
// ---------------------------------------------------------------------------
const sortBtn = document.getElementById("sortBtn");
if (sortBtn) {
    sortBtn.addEventListener("click", function () {
        console.log("Sort Button Clicked");
        if (typeof renderFirstCard === "function") {
            renderFirstCard();
            console.log("renderFirstCard() called successfully.");
        }
    });
}
const card = document.querySelector(".card");
if (card) {
    card.addEventListener("mouseover", function () {
        card.classList.add("hovered");
        console.log("Mouse Entered Card");
    });
    card.addEventListener("mouseout", function () {
        card.classList.remove("hovered");
        console.log("Mouse Left Card");
    });
}
const form = document.getElementById("addStudentForm");
if (form) {
    form.addEventListener("submit", function (e) {
        const nameInput = document.getElementById("nameInput");
        const branchInput = document.getElementById("branchInput");
        const semesterInput = document.getElementById("semesterInput");
        const formError = document.getElementById("formError");
        const name = nameInput.value.trim();
        const branch = branchInput.value.trim();
        const semester = Number(semesterInput.value);
        formError.textContent = "";
        if (name === "") {
            e.preventDefault();
            formError.textContent =
                "Student Name is required.";
            return;
        }
        if (branch === "") {
            e.preventDefault();
            formError.textContent =
                "Branch is required.";
            return;
        }
        if (
            semester < 1 ||
            semester > 8 ||
            isNaN(semester)
        ) {
            e.preventDefault();
            formError.textContent =
                "Semester must be between 1 and 8.";
            return;
        }
        console.log("Form Submitted Successfully");
    });
}

// ---------------------------------------------------------------------------
// Week 2 · Day 3 — Arrays & Loops I
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Week 2 · Day 4 — Arrays & Loops II + Objects Intro
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Week 2 · Day 5 — Objects Deep Dive + Mini Project
// ---------------------------------------------------------------------------
