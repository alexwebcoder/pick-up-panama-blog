import { useState } from "react";
// import useFetch from '../../../src/useFetch';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"


const SearchBar = () => {
    const [input, setInput] = useState('');

    const fetchData = (value) => {
      fetch('http://localhost:8000/blogs/')
       .then((response) => response.json())
       .then((json) => {
         const results = json.filter((blogs) => {
            return (
                value && blogs && blogs.title && blogs.title.toLowerCase().includes(value)
            );
         });
         console.log(results);
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
            <input placeholder="Search this site" value={input} onChange={(e) => handleChange(e.target.value)}/>
         </div>
        <div>SearchResults</div>
      </div>
    )
}

export default SearchBar;