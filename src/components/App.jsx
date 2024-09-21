import React from 'react';
import { useState } from 'react';
//import './App.css'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
//import Experience from './Experience';
//import Resume from './Resume';  

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

  return (
    <>
      <div className='Form'>
        <GeneralInfo onUpdate={updateGeneralInfo}/>
        <Education onUpdate={updateEducation}/>
      </div>    

      <div className='Resume'>
        
      </div>

    </>
  )
}

export default App;
