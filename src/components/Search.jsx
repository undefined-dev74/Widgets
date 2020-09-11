import React, {useState, useEffect} from 'react';
import axios from "axios";

 const Search = () => {
     const [term, setTerm] = useState('')
     
     /**
      * !Adding lifeCycle method to functional component
      */
      useEffect(()=> {
      },[term])
      
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label >Enter Search Term</label>
                    <input type="search" className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;