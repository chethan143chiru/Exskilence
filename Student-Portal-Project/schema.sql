-- Student Portal — schema + seed data
-- Run automatically by setup_db.sh, or manually with:
--   mysql -u root -p student_portal < schema.sql

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  branch VARCHAR(50) NOT NULL,
  semester INT NOT NULL,
  email VARCHAR(120)
);

CREATE TABLE IF NOT EXISTS marks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  subject VARCHAR(50) NOT NULL,
  score INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

INSERT INTO students (name, branch, semester, email) VALUES
  ('Priya Sharma', 'CSE', 3, 'priya@example.com'),
  ('Rahul Verma', 'ISE', 3, 'rahul@example.com'),
  ('Ananya Reddy', 'CSE', 3, 'ananya@example.com'),
  ('Karan Mehta', 'ECE', 3, 'karan@example.com'),
  ('Sneha Iyer', 'CSE', 3, 'sneha@example.com'),
  ('Vikram Rao', 'ISE', 3, 'vikram@example.com');

INSERT INTO marks (student_id, subject, score) VALUES
  (1, 'HTML', 88), (1, 'CSS', 82), (1, 'JavaScript', 91),
  (2, 'HTML', 65), (2, 'CSS', 70), (2, 'JavaScript', 58),
  (3, 'HTML', 95), (3, 'CSS', 90), (3, 'JavaScript', 93),
  (4, 'HTML', 40), (4, 'CSS', 55), (4, 'JavaScript', 48),
  (5, 'HTML', 78), (5, 'CSS', 74), (5, 'JavaScript', 80),
  (6, 'HTML', 60), (6, 'CSS', 62), (6, 'JavaScript', 66);
