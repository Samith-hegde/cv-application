import React from 'react';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import SubmitButton from './components/SubmitButton';
import Resume from './components/Resume';  


function App() {
  const [resumeData, setResumeData] = useState({
    generalInfo: [],
    education: [],
    experience: [],
    isSubmitted: false,
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
    }));
  }

  return (
    <>
      <div className='Form'>
        <GeneralInfo onUpdate={updateGeneralInfo}/>
        <Education onUpdate={updateEducation}/>
        <Experience onUpdate={updateExperience}/>
        <SubmitButton onUpdate={handleSubmit}/>
      </div>    

      <div className='Resume'>
        <Resume data={resumeData}/>
      </div>

    </>
  )
}

export default App;
