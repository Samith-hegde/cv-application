import React, { useState } from 'react';

function Education({ onUpdate }) {
    const [education, setEducation] = useState([]);

    const handleAddEducation = () => {
        setEducation((prevEducation) => [...prevEducation, { school: '', degree: '', startDate: '', graduationDate: '' }]);
    };

    const handleFieldChange = (e, index) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index] = {
            ...newEducation[index],
            [name]: value,
        };
        setEducation(newEducation);
        onUpdate(newEducation);
    }


    return (
        <div className="Education">
            <h2> Education </h2>
            
            {education.map((edu, index) => (
                <div key={index}>
                    <label>
                        School:
                        <input type="text" name="school" value={edu.school} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Degree:
                        <input type="text" name="degree" value={edu.degree} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="startDate" value={edu.startDate} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Graduation Date:
                        <input type="date" name="graduationDate" value={edu.graduationDate} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                </div>

            ))}

            <button onClick={handleAddEducation}> Add Education </button>
        </div>
    )

}

export default Education;