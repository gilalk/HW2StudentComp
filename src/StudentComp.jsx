import React from 'react';

export default function studentInfo(props) {

    let grade = props.student.studentGrade;
    let apprndWord;
    let gradeStyle

    if(grade > 0 && grade <= 56){
        apprndWord = "poor";
        gradeStyle = {color: "red"};
    }else if (grade > 56 && grade <= 75){
        apprndWord = "ok";
        gradeStyle = {color: "yellow", backgroundColor: "black"};
    }else if(grade > 75 && grade <= 85){
        apprndWord = "good";
        gradeStyle = {color: "orange"};
    }else if(grade > 85 && grade <= 100){
        apprndWord = "Exellent";
        gradeStyle = {color: "green"};
    }
    return (
        <>
            <div className='center'>
                <div className='card'>
                    <img src='https://cdn-icons-png.flaticon.com/512/67/67902.png' alt='avatar' style={{ width: '100%' }}></img>
                    <div className='container'>
                        <h3>{props.student.studentId}</h3>
                        <h4>{props.student.studentName}</h4>
                        <h5 style={gradeStyle}><b>{props.student.studentGrade} {apprndWord}</b></h5>
                    </div>
                </div>
            </div>
        </>
    );
}