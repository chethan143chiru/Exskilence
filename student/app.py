from flask import Flask, render_template, jsonify, request
import mysql.connector

app = Flask(__name__)


def get_students(sort="roll_no"):

    allowed = {"roll_no", "name", "branch", "semester", "cgpa"}

    if sort not in allowed:
        sort = "roll_no"

    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="studentdb"
    )

    cursor = conn.cursor(dictionary=True)

    query = f"SELECT * FROM students ORDER BY {sort}"

    cursor.execute(query)

    students = cursor.fetchall()

    cursor.close()
    conn.close()

    return students


@app.route("/")
def home():

    return render_template("student.html")


@app.route("/api/students")
def api_students():

    sort = request.args.get("sort", "roll_no")

    return jsonify(get_students(sort))


if __name__ == "__main__":

    app.run(debug=True, port=8000)
