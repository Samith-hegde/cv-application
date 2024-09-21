import React from 'react';
import { useState } from 'react';
//import './App.css'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import SubmitButton from './SubmitButton';
import Resume from './Resume';  

function App() {
  const [resumeData, setResumeData] = useState({
    generalInfo: {},
    education: {},
    experience: {},
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

  return (
    <>
      <div className='Form'>
        <GeneralInfo onUpdate={updateGeneralInfo}/>
        <Education onUpdate={updateEducation}/>
        <Experience onUpdate={updateExperience}/>
        <SubmitButton data={resumeData}/>
      </div>    

      <div className='Resume'>
        <Resume data={resumeData}/>
      </div>

    </>
  )
}

export default App;
