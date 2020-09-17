import React, { useState, useEffect } from 'react';

const Convert = ({language, text} ) => {
    
    useEffect(() => {
      console.log('New Language is added');
    }, [language, text]);
    return (
        <div>
            
        </div>
    )
}

export default Convert;