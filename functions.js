"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudentOnsite = exports.getStudent = exports.getOnsiteStudents = exports.getAllStudents = void 0;
var data_1 = require("./data");
var getAllStudents = function () {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
var getOnsiteStudents = function () {
    var result = data_1.default.filter(function (student) { return student.isOnsiteAllowed; });
    return result;
};
exports.getOnsiteStudents = getOnsiteStudents;
var getStudent = function (rollNumber) {
    var foundUser = data_1.default.find(function (student) { return student.rollNumber === rollNumber; });
    return foundUser;
};
exports.getStudent = getStudent;
var isStudentOnsite = function (rollNo) {
    var foundUser = data_1.default.find(function (student) { return student.rollNumber === rollNo && student.isOnsiteAllowed; });
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
exports.isStudentOnsite = isStudentOnsite;
