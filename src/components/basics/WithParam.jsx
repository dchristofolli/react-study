import React from 'react'

export default function withParam(props) {
    const status = props.grade >= 7 ? 'Approved' : 'Recovery';
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.student}</strong>
            <br />with grade
            <strong>{props.grade}</strong>
            with result:
            <strong>{status}</strong>
            </p>
        </div>
    );
}