import React, { useState } from 'react';
import './VisaApi.css';
import countryData from '../../country_data_updated.json';
import safetyData from '../../safety_data.json';

const VisaApi = () => {
  const [activeItem, setActiveItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const data = displayData();
    const filteredResults = data.filter((country) => {
      // Assuming you have a common field to search by. Adjust based on your actual data structure.
      // For simplicity, let's search by country name if it exists.
      const countryName = country.country_name
        ? country.country_name.toLowerCase()
        : '';
      return countryName.includes(searchTerm.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  const displayData = () => {
    switch (activeItem) {
      case 'Travel Advisories':
        return safetyData;
      case 'Visa Data':
      default:
        return countryData;
    }
  };

  return (
    <div className="visa-api-container">
      <h1>Visa Information</h1>
      <h4>Visa API</h4>
      <p>
        The data below is from the US State Department website and provides
        information about basic visa information for American citizens traveling
        abroad.
      </p>
      <p>
        PLEASE NOTE: some data may be missing or the data may be inconsistent!
        Please <a href="mailto:paulcapob@gmail.com">email us</a> to report
        errors or missing data.
      </p>
      <p className="date-text">
        Most recent data:<b className="date-value">March 2024</b>
      </p>

      <div className="api-list-div">
        <ul>
          <li>
            <button
              className={activeItem === 'Visa Data' ? 'active' : ''}
              onClick={() => handleClick('Visa Data')}
            >
              Visa Data
            </button>
          </li>
          <li>
            <button
              className={activeItem === 'Travel Advisories' ? 'active' : ''}
              onClick={() => handleClick('Travel Advisories')}
            >
              Travel Advisories
            </button>
          </li>
          <li>
            <button
              className={activeItem === 'Other' ? 'active' : ''}
              onClick={() => handleClick('Other')}
            >
              Other (coming soon)
            </button>
          </li>
        </ul>
      </div>

      <div className="country-info-box">
        <pre>
          <code>{JSON.stringify(displayData(), null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default VisaApi;
