// Base Class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getInfo() {
      return `${this.name}, Age: ${this.age}`;
    }
  }
  
  // Student Subclass
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);
      this.course = course;
    }
  
    getInfo() {
      return `${super.getInfo()}, Course: ${this.course}`;
    }
  }
  
  // Teacher Subclass
  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
  
    getInfo() {
      return `${super.getInfo()}, Subject: ${this.subject}`;
    }
  }
  
  // Export so we can use in App.jsx
  export { Person, Student, Teacher };
  