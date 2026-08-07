import os

from dotenv import load_dotenv
from flask import Flask, redirect, render_template, request, url_for

from models import Mark, Student, db


# Load environment variables from .env file
load_dotenv()


def create_app():
    app = Flask(__name__)

    # Database configuration
    db_user = os.environ.get("DB_USER", "student_portal_app")
    db_password = os.environ.get("DB_PASSWORD", " ")
    db_host = os.environ.get("DB_HOST", "localhost")
    db_name = os.environ.get("DB_NAME", "student_portal")

    # MySQL database connection
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"mysql+pymysql://{db_user}:{db_password}@{db_host}/{db_name}"
    )

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # Initialize database
    db.init_app(app)

    # Register application routes
    register_routes(app)

    return app


def register_routes(app):

    # --------------------------------------------------
    # Dashboard
    # --------------------------------------------------
    @app.route("/")
    def index():
        students = Student.query.order_by(Student.name).all()

        return render_template(
            "index.html",
            students=[student.to_dict() for student in students],
        )


    # --------------------------------------------------
    # Add Student
    # --------------------------------------------------
    @app.route("/students/add", methods=["GET", "POST"])
    def add_student():

        if request.method == "POST":

            # Get form values safely
            name = request.form.get("name", "").strip()
            branch = request.form.get("branch", "").strip()
            semester = request.form.get("semester", "").strip()
            email = request.form.get("email", "").strip()

            # Validate student name
            if not name:
                return "Student name is required.", 400

            # Validate branch
            if not branch:
                return "Branch is required.", 400

            # Validate semester
            if not semester:
                return "Semester is required.", 400

            # Convert semester to integer
            try:
                semester = int(semester)
            except ValueError:
                return "Semester must be a valid number.", 400

            # Check semester range
            if semester < 1 or semester > 8:
                return "Semester must be between 1 and 8.", 400

            # Create student
            student = Student(
                name=name,
                branch=branch,
                semester=semester,
                email=email,
            )

            # Save student to database
            db.session.add(student)
            db.session.commit()

            # Return to dashboard
            return redirect(url_for("index"))

        # Show Add Student page
        return render_template("add_student.html")


    # --------------------------------------------------
    # Student Details
    # --------------------------------------------------
    @app.route("/students/<int:student_id>")
    def student_detail(student_id):

        student = Student.query.get_or_404(student_id)

        return render_template(
            "student_detail.html",
            student=student.to_dict(),
        )


    # --------------------------------------------------
    # Add Student Marks
    # --------------------------------------------------
    @app.route(
        "/students/<int:student_id>/marks/add",
        methods=["POST"],
    )
    def add_mark(student_id):

        # Check whether student exists
        student = Student.query.get_or_404(student_id)

        # Get form values safely
        subject = request.form.get("subject", "").strip()
        score = request.form.get("score", "").strip()

        # Validate subject
        if not subject:
            return "Subject is required.", 400

        # Validate score
        if not score:
            return "Score is required.", 400

        # Convert score to integer
        try:
            score = int(score)
        except ValueError:
            return "Score must be a valid number.", 400

        # Validate score range
        if score < 0 or score > 100:
            return "Score must be between 0 and 100.", 400

        # Create mark record
        mark = Mark(
            student_id=student.id,
            subject=subject,
            score=score,
        )

        # Save mark to database
        db.session.add(mark)
        db.session.commit()

        # Return to student details page
        return redirect(
            url_for(
                "student_detail",
                student_id=student_id,
            )
        )


    # --------------------------------------------------
    # Delete Student
    # --------------------------------------------------
    @app.route(
        "/students/<int:student_id>/delete",
        methods=["POST"],
    )
    def delete_student(student_id):

        # Find student
        student = Student.query.get_or_404(student_id)

        # Delete student
        db.session.delete(student)
        db.session.commit()

        # Return to dashboard
        return redirect(url_for("index"))


# Create Flask application
app = create_app()


# --------------------------------------------------
# Run Application
# --------------------------------------------------
if __name__ == "__main__":

    # Get port from environment variable
    # Default port is 5000
    port = int(os.environ.get("PORT", 5000))

    app.run(
        debug=True,
        port=port,
    )