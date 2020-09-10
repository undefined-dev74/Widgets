import React from "react";
import Accordian from './components/Accordion'
export default () => {
    
    const items = [
      {
        title: "What is React ? ",
        content: "React is front end framework",
      },
      {
        title: "Why use React ? ",
        content: "Because React provide Single Progressive webapage technique",
      },
      {
        title: "How do you use react ? ",
        content: "You use React by creating components",
      },
    ];
    
  return (
      <div>
          <Accordian items={items}/>
      </div>
  )
};
