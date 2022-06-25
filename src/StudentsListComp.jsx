import React from 'react';
import StudentComp from './StudentComp';


export default function studentsListComp() {
    const student1 = { studentId: 45334234, studentName: "Mosh Levi", studentGrade: 42 };
    const student2 = { studentId: 94092374, studentName: "Gil Alkobi", studentGrade: 58 };
    const student3 = { studentId: 89834023, studentName: "Tania Lev", studentGrade: 80 };
    const student4 = { studentId: 70823402, studentName: "Ariel Doitch", studentGrade: 96 };

    return (
        <>
            <StudentComp student={student1}></StudentComp>
            <StudentComp student={student2}></StudentComp>
            <StudentComp student={student3}></StudentComp>
            <StudentComp student={student4}></StudentComp>
        </>
    );
}