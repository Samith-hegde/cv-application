import React from 'react';

function Resume({ data }) {

  return (
    <>
      <h2>{data.generalInfo.name}</h2>

      <div className="contact-info">
        <span> {data.generalInfo.email} </span>
        <span> {data.generalInfo.phone} </span>
      </div>

        <h3>Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.school}</h4>
              <p>{edu.degree}</p>
              <p>{edu.startDate} - {edu.graduationDate}</p>
            </div>
          ))}

        <h3>Experience</h3>
        {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4> {exp.company} </h4>
              <p> {exp.position}</p>
              <p> {exp.responsibilities}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
            </div>
        ))}
    </>
  )
};

export default Resume;
