import React from 'react';
import students from '../../data/students';

export default props => {
    const studentList = students.map((student) => {
        return (
        <li key={student.id}>
            {student.id}) {student.name} with grade {student.grade}
        </li>);
    });
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {studentList}
            </ul>
        </div>
    )
}