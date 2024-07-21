import * as students from "./functions";
// students.getAllStudents and students.getOnsite Students dono students main hai
const result = students.getAllStudents();
// console.log(result);

const onsiteStudents = students.getOnsiteStudents();
// console.log(onsiteStudents);

const res=students.getStudent(123)
console.log(res);

const onlineResult=students.isStudentOnsite(123)
console.log(onlineResult);
