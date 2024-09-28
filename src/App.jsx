import React from 'react';
import { useState, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import SubmitButton from './components/SubmitButton';
import Resume from './components/Resume';  
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

  const resumeRef = useRef(null);

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

  const handlePDFDownload = async () => {
    const canvas = await html2canvas(resumeRef.current)
    const imgData = canvas.toDataURL('image/png')
    
    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;

    // Add image to PDF, creating new pages if necessary
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('resume.pdf')
  }

  return (
    <div className="container">
      <div className='Form'>
        <GeneralInfo onUpdate={updateGeneralInfo} data={resumeData} onEdit={handleEdit}/>
        <Education onUpdate={updateEducation} data={resumeData} onEdit={handleEdit}/>
        <Experience onUpdate={updateExperience} data={resumeData} onEdit={handleEdit}/>
        <SubmitButton onUpdate={handleSubmit} data={resumeData} onEdit={handleEdit}/>
      </div>    

      <div className="Resume">
        <div ref={resumeRef}>
          <Resume data={submittedData} id="pdf"/>
        </div>
        <button onClick={handlePDFDownload}>Download Resume as PDF</button>
      </div>

    </div>
  )
}

export default App;
