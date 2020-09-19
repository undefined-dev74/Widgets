import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

export default () => {
    const [selected, setSelected] = useState([0]);
  
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
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label='select a color'
          options={options}
          selected={ selected}
          onSelectedChange = {setSelected}
          
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
