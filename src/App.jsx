import React from 'react';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import SubmitButton from './components/SubmitButton';
import Resume from './components/Resume';  
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    generalInfo: [],
    education: [],
    experience: [],
    isSubmitted: false,
    isEditing: [1, 1, 1],
  });

  const [submittedData, setSubmittedData] = useState({
    generalInfo: [],
    education: [],
    experience: [],
  });

  const updateGeneralInfo = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      generalInfo: {
        ...prevData.generalInfo,
        ...data,
      },
    }));
  };

  const updateEducation = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: data,
    }));
  }

  const updateExperience = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: data,
    }))
  }

  const handleSubmit = () => {
    setResumeData((prevData) => ({
      ...prevData,
      isSubmitted: true,
      isEditing: [0, 0, 0],
    }));
    setSubmittedData((prevData) => ({
      ...prevData,
      generalInfo: resumeData.generalInfo,
      education: resumeData.education,
      experience: resumeData.experience,
    }));
  }

  const handleEdit = (index) => {
    setResumeData((prevData) => ({
      ...prevData,
      isEditing: 
        prevData.isEditing.map((value, i) => {
          if (i === index) {
            return 1;
          }
          return value;
        }),
    }));
  }

  return (
    <div className="container">
      <div className='Form'>
        <GeneralInfo onUpdate={updateGeneralInfo} data={resumeData} onEdit={handleEdit}/>
        <Education onUpdate={updateEducation} data={resumeData} onEdit={handleEdit}/>
        <Experience onUpdate={updateExperience} data={resumeData} onEdit={handleEdit}/>
        <SubmitButton onUpdate={handleSubmit} data={resumeData} onEdit={handleEdit}/>
      </div>    

      <div className='Resume'>
        <Resume data={submittedData}/>
      </div>

    </div>
  )
}

export default App;
