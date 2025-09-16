import { useState } from "react";
import { Student, Teacher } from "./components/Person";
import "./App.css"; // Make sure to import the CSS file

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([
    new Student("Srikanth", 20, "AIML"),
    new Student("Kartik", 22, "Cyber"),
    new Student("Sreekar", 19, "AIDS"),
  ]);

  const addStudent = () => {
    if (name && age && course) {
      const newStudent = new Student(name, age, course);
      setStudents([...students, newStudent]);
      setName("");
      setAge("");
      setCourse("");
    }
  };

  const teacher = new Teacher("Harbindher", 40, "Full Stack");

  return (
    <div className="card"> {/* This div is centered by CSS */}
      <h1>Person Class Hierarchy</h1>

      <h2>Teacher Example</h2>
      <p>{teacher.getInfo()}</p>

      <h2>Add Student</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.getInfo()}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;