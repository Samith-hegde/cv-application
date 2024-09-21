import React, { useState } from 'react';

function SubmitButton({ data }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        console.log(data);
    }

    return (
        <div className="SubmitButton">
            <button onClick={handleSubmit}> Submit </button>
            {isSubmitted && <p> Submitted </p>}
        </div>
    )
}

export default SubmitButton;