import React, { useState } from 'react';
import Accordian from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


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
  const showAccordian = () => {
    if(window.location.pathname === '/') {
      return <Accordian items={items}/>;
    }
  }
  const showList = () => {
    if(window.location.pathname === '/list') {
      return <Search/>;
    }
  }
  
  const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
      return <Dropdown/>;
    }
  }
  
  const showTranslate = () => {
    if(window.location.pathname === '/translate') {
      return <Translate/>;
    }
  }
  
  return (
    <div>
      {/* <Translate /> */}
      {/* <Accordian items={items}/> */}
      {showAccordian()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
      {/* <Search /> */}
    </div>
  );
};
