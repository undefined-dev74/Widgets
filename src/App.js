import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
export default () => {
  const items = [
    {
      title: 'What is React ? ',
      content: 'React is front end framework',
    },
    {
      title: 'Why use React ? ',
      content: 'Because React provide Single Progressive webapage technique',
    },
    {
      title: 'How do you use react ? ',
      content: 'You use React by creating components',
    },
  ];

  // ? Defining array of an options dropdown widgets
  const options = [
    {
      label: 'This is a Red Color',
      value: 'red',
    },
    {
      label: 'This is a yellow Color',
      value: 'Yellow',
    },
    {
      label: 'This is a Green Color',
      value: 'Green',
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {/* <Accordian items={items}/> */}
      {/* <Search /> */}
      {
        showDropdown ?
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }
    </div>
  );
};
