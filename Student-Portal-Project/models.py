from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Student(db.Model):
    __tablename__ = "students"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    branch = db.Column(db.String(50), nullable=False)
    semester = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(120))
    marks = db.relationship("Mark", backref="student", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "branch": self.branch,
            "semester": self.semester,
            "email": self.email,
            "marks": {m.subject: m.score for m in self.marks},
        }


class Mark(db.Model):
    __tablename__ = "marks"

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, db.ForeignKey("students.id"), nullable=False)
    subject = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)
