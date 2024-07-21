"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students = require("./functions");
// students.getAllStudents and students.getOnsite Students dono students main hai
var result = students.getAllStudents();
// console.log(result);
var onsiteStudents = students.getOnsiteStudents();
// console.log(onsiteStudents);
var res = students.getStudent(123);
console.log(res);
var onlineResult = students.isStudentOnsite(123);
console.log(onlineResult);
