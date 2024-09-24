import React, { useState } from 'react';

function GeneralInfo({ onUpdate, data, onEdit }) {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo((prevGeneralInfo) => ({
            ...prevGeneralInfo,
            [name]: value,
        }));
        onUpdate(generalInfo);
    }

    if (data.isEditing[0] === 0) {
        return (
            <div className="GeneralInfo-display">
                <h2> General Information </h2>
                <p> Name: {data.generalInfo.name} </p>
                <p> Email: {data.generalInfo.email} </p>
                <p> Phone: {data.generalInfo.phone} </p>
                <button onClick={() => onEdit(0)}> Edit </button>
            </div>
        )
    }

    return (
        <div className="GeneralInfoForm">
            <h2> General Information </h2>
            <form className="GeneralInfoActualForm">
                <label>
                    Name:
                    <input type="text" name="name" value={generalInfo.name} onChange={handleFieldChange} required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={generalInfo.email} onChange={handleFieldChange} required/>
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={generalInfo.phone} onChange={handleFieldChange} required/>
                </label>
            </form>
        </div>
    )
}

export default GeneralInfo;