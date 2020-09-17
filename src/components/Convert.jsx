import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Convert = ({language, text} ) => {
    
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translation/v2')
    }, [language, text]);
    return (
        <div>
            
        </div>
    )
}

export default Convert;