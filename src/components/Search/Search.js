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
  };

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && filteredData.length > 0) {
      clearInput();
    }
});


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
        <div className="search-icon" tabIndex={0}>
          {filteredData.length === 0 ? (
            <button type="submit" id="search-icon">
        <i className="fa fa-search"></i>
      </button>
          ) : (
            <VscChromeClose id="clearBtn" onClick={clearInput} />
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
