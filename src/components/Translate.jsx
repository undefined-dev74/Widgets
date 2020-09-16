import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
          <div className="field"><label htmlFor="inputtext">Enter Text</label></div>
        <input id='inputtext' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <Dropdown
        label={'Select a Language'}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
