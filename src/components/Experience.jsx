import React, { useState } from 'react';

function Experience({ onUpdate }) {
    const [experience, setExperience] = useState([]);

    const handleAddExperience = () => {
        setExperience((prevExperience) => [...prevExperience, { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }]);
    };

    const handleFieldChange = (e, index) => {
        const { name, value } = e.target;
        const newExperience = [...experience];
        newExperience[index] = {
            ...newExperience[index],
            [name]: value,
        };
        setEducation(newExperience);
        onUpdate(newExperience);
    }

    return (
        <div className="Experience">
            <h2> Experience </h2>

            {experience.map((exp, index) => (
                <div key={index}>
                    <label>
                        Company:
                        <input type="text" name="company" value={exp.company} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Position:
                        <input type="text" name="position" value={exp.position} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Responsibilities:
                        <textarea name="responsibilities" value={exp.responsibilities} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                    <label>
                        End Date:
                        <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleFieldChange(e, index)} required/>
                    </label>
                </div>
            ))}

            <button onClick={handleAddExperience}> Add Experience </button>
        </div>
    )
}

export default Experience;