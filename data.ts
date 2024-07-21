import { Student } from "./interface";
const student: Student[] = [
    {
      name: "Ameer Saria",
      rollNumber: 123,
      city: "Karachi",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        marksOBT: 80,
        marksTTL: 100,
      },
    },
    {
      name: "Ameer Mavia",
      rollNumber: 1234,
      city: "Murree",
      isOnsiteAllowed: false,
      entryTest: {
        isPassed: false,
        marksOBT: 0,
        marksTTL: 100,
      },
    },
  ];

  export default student;