import { useState } from 'react';
import countriesData from '../../country_data_updated.json';
import safetyData from '../../safety_data.json';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    setSearchResults([]);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let filteredResults = [];

    if (activeItem === 'Visa Data' || activeItem === 'Travel Advisories') {
      const dataToFilter =
        activeItem === 'Visa Data' ? countriesData : safetyData;
      filteredResults = dataToFilter.filter((data) =>
        data.country_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSearchResults(filteredResults);
  };

  return (
    <div className="search-container">
      <h1>Search Countries</h1>
      <p>
        VISA INFORMATION: Americans can search travel information and visa
        requirements for countries around the world.
      </p>
      <p>
        TRAVEL ADVISORIES: Search current travel and safety information for
        countries. This data was scraped from the US State Department website.
      </p>
      <div className="search-buttons-div">
        <ul>
          <li>
            <button
              className={activeItem === 'Visa Data' ? 'active' : ''}
              onClick={() => handleClick('Visa Data')}
            >
              Visa Information
            </button>
            <button
              className={activeItem === 'Travel Advisories' ? 'active' : ''}
              onClick={() => handleClick('Travel Advisories')}
            >
              Travel Advisories
            </button>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search countries"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <div className="results-table">
        {searchResults.map((result, index) => (
          <table key={index} className="country-table">
            <thead>
              <tr>
                <th colSpan="2">{result.country_name}</th>{' '}
              </tr>
            </thead>
            <tbody>
              {activeItem === 'Visa Data' ? (
                result.info?.map((info, infoIndex) => (
                  <tr key={infoIndex}>
                    <td className="info-title">{info.title}</td>
                    <td>{info.data}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">{result['Safety and Security']}</td>
                </tr>
              )}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Search;
