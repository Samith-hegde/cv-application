import React, { useState } from 'react';

function GeneralInfo({ onUpdate }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        onUpdate({ name: e.target.value });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onUpdate({ email: e.target.value });
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        onUpdate({ phone: e.target.value });
    }

    return (
        <div className="GeneralInfo">
            <h2> General Information </h2>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} required/>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required/>
                </label>
                <label>
                    Phone:
                    <input type="text" value={phone} onChange={handlePhoneChange} required/>
                </label>
            </form>
        </div>
    )
}

export default GeneralInfo;