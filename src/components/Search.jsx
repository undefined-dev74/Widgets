import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('Wikipedia Home');
  const [results, setResults] = useState([]);

  // !Adding lifeCycle method to functional component
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      //? We set here timeout so that search only happen once user !stop typing the term
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

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
