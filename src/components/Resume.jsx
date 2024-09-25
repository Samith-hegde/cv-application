/*import React, { useState } from 'react';

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

export default Resume;*/

import React from 'react';

function Resume({ data }) {

  return (
    <>
      <h2>{data.generalInfo.name || "Your Name"}</h2>

      <div className="contact-info">
        <p>Email: {data.generalInfo.email || "example@mail.com"}</p>
        <p>Phone: {data.generalInfo.phone || "(123) 456-7890"}</p>
      </div>

      <div className="Resume-section">
        <h3>Education</h3>
        {data.education.length > 0 ? (
          data.education.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.school}</strong></p>
              <p>Degree: {edu.degree}</p>
              <p>{edu.startDate} - {edu.graduationDate}</p>
            </div>
          ))
        ) : (
          <p>No education details added yet.</p>
        )}
      </div>

      <div className="Resume-section">
        <h3>Experience</h3>
        {data.experience.length > 0 ? (
          data.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>{exp.company}</strong></p>
              <p>Position: {exp.position}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>Responsibilities: {exp.responsibilities}</p>
            </div>
          ))
        ) : (
          <p>No experience details added yet.</p>
        )}
      </div>
    </>
  )
};

export default Resume;
