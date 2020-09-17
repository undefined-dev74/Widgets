import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // !Adding Debounce Method to prevent reRender component twice
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 500);

    return () => {
      clearInterval(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedTerm]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
