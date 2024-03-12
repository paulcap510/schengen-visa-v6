import { useState } from 'react';
import countriesData from '../../country_data_updated.json';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = countriesData.filter((country) =>
      country.country_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="search-container">
      <h1>Search Countries</h1>
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
        {searchResults.map((country, index) => (
          <table key={index} className="country-table">
            <thead>
              <tr>
                <th colSpan="2">{country.country_name}</th>
              </tr>
            </thead>
            <tbody>
              {country.info.map((info, infoIndex) => (
                <tr key={infoIndex}>
                  <td className="info-title">{info.title}</td>
                  <td>{info.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Search;
