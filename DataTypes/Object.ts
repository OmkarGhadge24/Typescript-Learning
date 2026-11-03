var empData: {
    name: string;
    age: number;
    salary: number;
    isMarried: boolean;
} = {
    name: "John",
    age: 30,
    salary: 50000,
    isMarried: true,
};

console.log(empData);

var studentData: {
    [key: string]: string | number | boolean;
} = {
    name: "Bob",
    isEnrolled: true,
    age: 21,
};

console.log(studentData);
