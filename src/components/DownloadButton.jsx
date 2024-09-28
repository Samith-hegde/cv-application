import React from 'react';
import { useRef } from 'react';

const DownloadButton = ({ children }) => {
    const pdfRef = useRef();

    return (
        <div>
            <div ref={pdfRef}>
                {children}
            </div>

            <button onClick={() => {
                pdfRef.current.toPDF();
            }
            }>
                Download Resume as PDF
            </button>
        </div>
    )
}

export default DownloadButton;