import React, { useState } from 'react';
import './VisaApi.css';
import countryData from '../../country_data_updated.json';

const VisaApi = () => {
  const [activeItem, setActiveItem] = useState('');

  console.log(countryData);

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    console.log(`Active item: ${itemName}`);
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
              Travel Advisories (coming soon)
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
          <code>{JSON.stringify(countryData, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default VisaApi;
