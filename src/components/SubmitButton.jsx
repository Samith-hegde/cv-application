import React, { useState } from 'react';

function SubmitButton({ onUpdate }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate();
    }

    return (
        <div>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    )
}

export default SubmitButton;