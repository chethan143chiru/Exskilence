# Exskilence

> A practical web-development learning repository containing JavaScript exercises, DOM manipulation projects, interactive browser applications, and a Flask + MySQL Student Portal.

## 📌 Overview

**Exskilence** is a collection of programming and web-development practice projects built while learning and strengthening practical development skills.

The repository covers both **frontend JavaScript development** and **Python Flask backend development**, with projects ranging from small browser-based exercises to a database-backed Student Portal.

The goal of this repository is simple:

**Learn → Build → Experiment → Improve.**

Instead of keeping every exercise isolated, this repository brings different concepts and implementations together in one place.

---

## 🚀 What This Repository Contains

The repository currently includes:

- JavaScript DOM manipulation exercises
- JavaScript event handling
- Event delegation
- Form handling and validation
- JavaScript loops and array methods
- Interactive quiz application
- Age calculator
- Student card application
- Student Portal
- Flask backend development
- MySQL database integration
- SQLAlchemy ORM
- HTML/CSS/JavaScript practice
- Small JavaScript experiments and challenges

---

# 📂 Project Structure

```text
Exskilence/
│
├── Student-Portal-Project/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│   ├── schema.sql
│   ├── static/
│   └── templates/
│
├── age_cal/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── changeing/
│   ├── add.html
│   └── script.js
│
├── event/
│   ├── index.html
│   └── script.js
│
├── exercise/
│   ├── index.html
│   └── script.js
│
├── loops/
│   ├── index.html
│   └── script.js
│
├── quize_app/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── student/
│   ├── app.py
│   ├── static/
│   └── templates/
│
├── student_card/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── test/
│   ├── index.html
│   └── script.js
│
└── trickyexe/
    ├── index.html
    └── script.js
```

---

# 🎓 Main Project — Student Portal

The **Student-Portal-Project** is the most complete application in this repository.

It is a Flask-based student management application connected to a MySQL database.

## Features

### Student Management

The portal supports:

- Adding students
- Viewing students
- Viewing individual student details
- Deleting students
- Managing student information

Student information includes:

- Name
- Branch
- Semester
- Email

### Marks Management

The application also allows marks to be associated with students.

Each mark contains:

- Subject
- Score
- Student relationship

Scores are validated to remain between **0 and 100**.

### Backend

The Student Portal uses:

- Python
- Flask
- Flask-SQLAlchemy
- PyMySQL
- MySQL
- python-dotenv

The database models are defined using SQLAlchemy.

---

# 🧑‍💻 Student Portal Architecture

```text
Browser
   │
   ▼
HTML Templates
   │
   ▼
Flask Application
   │
   ├── Student Routes
   ├── Student Details
   ├── Add Student
   ├── Add Marks
   └── Delete Student
   │
   ▼
SQLAlchemy ORM
   │
   ▼
MySQL Database
```

---

# 🗄️ Database Models

The Student Portal contains two primary database models.

## Student

```text
Student
├── id
├── name
├── branch
├── semester
├── email
└── marks
```

## Mark

```text
Mark
├── id
├── student_id
├── subject
└── score
```

The `Mark` model is connected to the `Student` model using a foreign-key relationship.

---

# 🌐 JavaScript Practice Projects

The repository also contains several frontend-focused projects.

## 1. DOM Exercises

The `exercise` directory contains practical DOM manipulation exercises.

Topics covered include:

- `getElementById()`
- `querySelector()`
- `querySelectorAll()`
- CSS selectors
- `textContent`
- `innerHTML`
- Attributes
- `classList`
- Creating elements
- Appending elements
- Prepending elements
- DOM traversal
- Parent/child relationships
- Previous/next sibling navigation

Example:

```javascript
const intro = document.getElementById("intro");

console.log(intro.textContent);
```

---

# 🔁 2. JavaScript Loops & Array Methods

The `loops` project demonstrates JavaScript iteration and array processing.

Concepts include:

- `for` loops
- `while` loops
- `break`
- `continue`
- `forEach()`
- `map()`
- `filter()`
- `reduce()`
- Method chaining

For example:

```javascript
const finalMarks = marks
    .map(function(mark) {
        return mark + 5;
    })
    .filter(function(mark) {
        return mark >= 40;
    });
```

The project also compares traditional loops with functional array methods.

---

# ⚡ 3. JavaScript Events

The `event` directory focuses on browser events and event-driven programming.

Topics include:

- Click events
- `e.target`
- Mouse events
- Hover interactions
- Change events
- Form submission
- `preventDefault()`
- Live validation
- Event delegation
- Dynamic element handling

The project also includes a small feedback form.

### Feedback Form

Users can:

- Enter their name
- Enter feedback
- Submit feedback
- View submitted feedback
- Delete feedback
- Track the feedback count

This demonstrates how dynamically created elements can be handled using event delegation.

---

# 🧠 4. Quiz Application

The `quize_app` directory contains a simple interactive quiz application.

The application:

1. Loads quiz questions.
2. Displays multiple-choice options.
3. Allows users to select answers.
4. Validates that all questions are answered.
5. Calculates the score.
6. Displays the final result.

Example question topics include:

- HTML
- CSS
- JavaScript
- HTML elements
- HTML attributes

---

# 🎂 5. Age Calculator

The `age_cal` directory contains a browser-based age calculator.

Technologies used:

- HTML
- CSS
- JavaScript

The project demonstrates how JavaScript can process user input and calculate age dynamically.

---

# 👨‍🎓 6. Student Card

The `student_card` directory contains a small frontend project focused on creating and manipulating student information through HTML, CSS, and JavaScript.

It demonstrates basic frontend interaction and dynamic content handling.

---

# 🧪 7. Additional Experiments

The repository also contains smaller experimental projects and exercises, including:

- `changeing`
- `test`
- `trickyexe`
- `student`

These folders are intended for experimentation, practice, and exploring individual programming concepts.

---

# 🛠️ Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript
- DOM API

## Backend

- Python
- Flask

## Database

- MySQL
- SQLAlchemy
- PyMySQL

## Development Concepts

- DOM manipulation
- Event handling
- Event delegation
- Form validation
- Array processing
- CRUD operations
- Database relationships
- Backend routing
- ORM
- Input validation

---

# 💻 Running the JavaScript Projects

Most frontend projects do not require a backend server.

You can open their `index.html` file directly in a browser.

For example:

```text
age_cal/index.html
```

or:

```text
quize_app/index.html
```

or:

```text
event/index.html
```

For a better development experience, you can also use **VS Code Live Server**.

---

# 🐍 Running the Student Portal

Navigate to the Student Portal:

```bash
cd Student-Portal-Project
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate it on Linux/macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 🗄️ Configure MySQL

Create a MySQL database for the application.

Example:

```sql
CREATE DATABASE student_portal;
```

The application expects database configuration through environment variables.

Create a `.env` file inside `Student-Portal-Project`:

```env
DB_USER=student_portal_app
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=student_portal
```

Update the values according to your MySQL configuration.

---

# ▶️ Start the Flask Application

Run:

```bash
python app.py
```

The application runs on:

```text
http://127.0.0.1:5000
```

Open the address in your browser.

---

# 🔐 Input Validation

The Student Portal includes server-side validation for important fields.

Examples:

### Student Name

The name cannot be empty.

### Branch

The branch cannot be empty.

### Semester

Semester must be a number between:

```text
1 - 8
```

### Marks

Marks must be between:

```text
0 - 100
```

This prevents invalid values from being inserted into the application.

---

# 📚 Learning Objectives

This repository was created to practice and strengthen several important development concepts.

### JavaScript

- Understand the DOM
- Select HTML elements
- Modify webpage content
- Create dynamic elements
- Handle user events
- Validate forms
- Work with arrays
- Understand loops
- Use functional array methods

### Python / Flask

- Build Flask applications
- Create routes
- Process forms
- Validate input
- Render templates
- Connect applications to databases

### Database

- Design relational tables
- Create relationships
- Use SQLAlchemy
- Perform CRUD operations
- Work with MySQL

---

# 🎯 Project Philosophy

Exskilence is primarily a **learning-by-building repository**.

Rather than focusing only on theoretical examples, the projects gradually move from simple programming exercises toward practical applications.

```text
Programming Fundamentals
        ↓
JavaScript
        ↓
DOM Manipulation
        ↓
Events & Forms
        ↓
Interactive Applications
        ↓
Python & Flask
        ↓
Database Integration
        ↓
Full Web Application
```

---

# 🚧 Future Improvements

Possible improvements include:

- Improve the Student Portal UI
- Add authentication and authorization
- Add admin and student roles
- Add student search and filtering
- Add edit/update student functionality
- Add attendance management
- Add subject management
- Add marks analytics
- Add GPA/CGPA calculation
- Add dashboard statistics
- Improve form validation
- Add responsive UI
- Add automated tests
- Add deployment configuration
- Add API endpoints
- Add REST API integration

---

# 🤝 Contributing

This repository is primarily a personal learning and development repository, but suggestions and improvements are welcome.

To contribute:

```bash
git clone https://github.com/chethan143chiru/Exskilence.git
```

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Make your changes and commit them:

```bash
git add .
git commit -m "Add your feature"
```

Push the branch:

```bash
git push origin feature/your-feature
```

Then create a Pull Request.

---

# 📄 License

This repository does not currently specify a formal open-source license.

If you want others to freely reuse the code, consider adding an appropriate license such as the MIT License.

---

# 👨‍💻 Author

**Chethan143Chiru**

GitHub:

https://github.com/chethan143chiru

Repository:

https://github.com/chethan143chiru/Exskilence

---

## ⭐ Final Note

Exskilence represents a progression from small programming exercises to practical web application development.

It combines:

**JavaScript + DOM + Events + Forms + Python + Flask + MySQL + SQLAlchemy**

into a single learning-oriented repository.

> **Learn the concept. Build the feature. Break the code. Fix it. Repeat. 🚀**
