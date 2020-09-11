import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('Wikipedia Home');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  
  // !Adding Debounce Method to prevent reRender component twice
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [term]);
  
// important : This useEffect runs when our component first reRender on screen
  useEffect(() => {
        const search = async () => {
          const { data } = await axios.get(
            'https://en.wikipedia.org/w/api.php',
            {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debouncedTerm,
              },
            }
          );
          setResults(data.query.search);
        };
        search();
  }, [debouncedTerm])
  
  // !Adding lifeCycle method to functional component
  
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikepedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="search"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
