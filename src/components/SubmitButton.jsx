import React, { useState } from 'react';

function SubmitButton({ onUpdate }) {

    return (
        <div>
            <button onClick={onUpdate}> Submit </button>
        </div>
    )
}

export default SubmitButton;