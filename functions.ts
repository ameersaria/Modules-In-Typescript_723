import student from "./data";

 export const getAllStudents = () => {
    return student;
  };
  
 export const getOnsiteStudents = () => {
    const result = student.filter((student) => student.isOnsiteAllowed);
    return result;
  };
  
  export const getStudent=(rollNumber:number)=>{
    const foundUser=student.find((student)=>student.rollNumber===rollNumber)
  return foundUser
  }

  export const isStudentOnsite=(rollNo:number)=>{
    const foundUser=student.find((student)=>student.rollNumber === rollNo && student.isOnsiteAllowed)
   if(foundUser){
    return true
   }else{return false}
  }