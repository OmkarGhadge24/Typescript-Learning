interface studInfo {
    name: string,
    age: number,
    college: string,
    isStudent: boolean
}

interface teacherInfo extends studInfo {
    subject: string,
    salary: number
}

var student1: studInfo = {
    name: 'Alice',
    age: 25,
    college: 'IIT Bombay',
    isStudent: true
}

var teacher1: teacherInfo = {
    name: 'Bob',
    age: 35,
    college: 'IIT Bombay',
    isStudent: false,
    subject: 'Mathematics',
    salary: 50000
}

console.log(student1);
console.log(teacher1);
