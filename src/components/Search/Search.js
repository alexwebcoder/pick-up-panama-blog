import  { useState } from "react";
import "./Search.css";
import { VscChromeClose } from "react-icons/vsc";

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.keywords.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    console.log('fired')
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter' || event.keycode === 32 || event.code === 'Space' || event.key === 'Escape'){
      clearInput();
    }
  }


  return (
    <div className="search-wrap">
      <div className="search">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="search-term"
        />
        <div className="search-icon" >
          {filteredData.length === 0 ? (
            <button type="submit" id="search-icon">
        <i className="fa fa-search"></i>
      </button>
          ) : (
            <VscChromeClose id="clearBtn" tabIndex={0} onClick={clearInput} onKeyDown={handleKeyPress}/>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a href={value.link} className="dataItem">
                <p>{value.keywords} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
