import React, { useState } from 'react';

function Resume({ data }) {

    return (
        <div className="Resume">
            <h2> Resume </h2>
            <h3> General Information </h3>
            <p> Name: {data.generalInfo.name} </p>
            <p> Email: {data.generalInfo.email} </p>
            <p> Phone: {data.generalInfo.phone} </p>
            <h3> Education </h3>
            {data.education.map((edu, index) => (
                <div key={index}>
                    <p> School: {edu.school} </p>
                    <p> Degree: {edu.degree} </p>
                    <p> Start Date: {edu.startDate} </p>
                    <p> Graduation Date: {edu.graduationDate} </p>
                </div>
            ))}
            <h3> Experience </h3>
            {data.experience.map((exp, index) => (
                <div key={index}>
                    <p> Company: {exp.company} </p>
                    <p> Position: {exp.position} </p>
                    <p> Responsibilities: {exp.responsibilities} </p>
                    <p> Start Date: {exp.startDate} </p>
                    <p> End Date: {exp.endDate} </p>
                </div>
            ))}
        </div>
    )
};

export default Resume;

/*
<div className="Resume">
            <h2> Resume </h2>
            <h3> General Information </h3>
            <p> Name: {data.generalInfo.name} </p>
            <p> Email: {data.generalInfo.email} </p>
            <p> Phone: {data.generalInfo.phone} </p>
            <h3> Education </h3>
            {data.education.map((edu, index) => (
                <div key={index}>
                    <p> School: {edu.school} </p>
                    <p> Degree: {edu.degree} </p>
                    <p> Start Date: {edu.startDate} </p>
                    <p> Graduation Date: {edu.graduationDate} </p>
                </div>
            ))}
            <h3> Experience </h3>
            {data.experience.map((exp, index) => (
                <div key={index}>
                    <p> Company: {exp.company} </p>
                    <p> Position: {exp.position} </p>
                    <p> Responsibilities: {exp.responsibilities} </p>
                    <p> Start Date: {exp.startDate} </p>
                    <p> End Date: {exp.endDate} </p>
                </div>
            ))}
        </div>
*/