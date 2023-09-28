import { useState } from "react";
// import useFetch from '../../../src/useFetch';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import { SearchResults } from "semantic-ui-react";


const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');
    

    const fetchData = (value) => {
      fetch('http://localhost:8000/searchResults/')
       .then((response) => response.json())
       .then((json) => {
         const results = json.filter((searchResults) => {
            return (
                value && 
                SearchResults && 
                SearchResults.siteData && 
                SearchResults.siteData.toLowerCase().includes(value)
            );
         });
         setResults(results);
       });
    };
   

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }


    return (
      <div className="search-bar-container">
         <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Search" value={input} onChange={(e) => handleChange(e.target.value)}/>
         </div>
      </div>
    )
}

export default SearchBar;