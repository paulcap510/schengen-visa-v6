import { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
// import { useDarkMode } from '../../DarkModeContext';

const Hero = () => {
  // const { darkMode } = useDarkMode();
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');
  const [allowFuture, setAllowFuture] = useState(false);
  const [trips, setTrips] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(90);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [today, setToday] = useState(new Date());
  const [sixMonthsAgo, setSixMonthsAgo] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 180);
    return date;
  });

  const countries = [
    'Austria',
    'Belgium',
    'Croatia',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Italy',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
  ];

  const formattedMinDate = sixMonthsAgo.toISOString().split('T')[0];
  const formattedMaxDate = allowFuture
    ? ''
    : new Date().toISOString().split('T')[0];

  const addTrip = () => {
    if (!entryDate || !exitDate) {
      alert('Please select both entry and exit dates.');
      return;
    }

    const entryDateObj = new Date(entryDate);
    const exitDateObj = new Date(exitDate);
    const minDate = new Date(sixMonthsAgo);
    const maxDate = allowFuture ? new Date(9999, 11, 31) : new Date();

    if (
      entryDateObj < minDate ||
      entryDateObj > maxDate ||
      exitDateObj > maxDate
    ) {
      alert(
        'Invalid date selection. Please ensure dates are within the allowed range.'
      );
      return;
    }
    if (exitDateObj <= entryDateObj) {
      alert('Exit date must be after entry date.');
      return;
    }

    const dateDifference =
      Math.abs(exitDateObj - entryDateObj) / (1000 * 3600 * 24) + 1;

    const newTrip = {
      entryDate: entryDate,
      exitDate: exitDate,
      dateDifference: dateDifference,
      country: selectedCountry,
    };

    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    setEntryDate('');
    setExitDate('');

    const newTotalDays = updatedTrips.reduce(
      (acc, trip) => acc + trip.dateDifference,
      0
    );
    setTotalDays(newTotalDays);
    calculateDaysRemaining(newTotalDays);
  };

  const calculateDaysRemaining = (totalDays) => {
    const remainingDays = 90 - totalDays;
    setDaysRemaining(remainingDays);
  };

  return (
    <div className="hero-container">
      {' '}
      <h1 className="hero-heading">Schengen Visa Calculator</h1>
      <h2 className="hero-subheading">
        Use this to calculator your Schengen Visa stays easily.
      </h2>
      <p className="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem,
        minus veritatis sapiente quidem hic eaque, adipisci quaerat odit
        accusamus unde rem? Sed ducimus provident earum voluptatum, doloribus
        ratione minima?
      </p>
      <p>
        Please read our{' '}
        <Link to="/about" className="pink-color">
          USAGE STATEMENT
        </Link>
        . This app is for informational purposes only.
      </p>
      <p>
        Please also refer to{' '}
        <Link to="/about" className="pink-color">
          HOW TO USE.
        </Link>
      </p>
      <div className="dates-div">
        <h2>Enter Your Trip Dates Below</h2>
        <div className="date-input-div date-value">
          <h5 className="date-text">
            Today:
            <span className="lightblue-color">
              {today.toLocaleDateString()}
            </span>
          </h5>
          <h5 className="date-text">
            180 Days Ago:
            <span className="lightblue-color date-value">
              {sixMonthsAgo.toLocaleDateString()}
            </span>
          </h5>
        </div>
        <div className="date-selection-div">
          <label htmlFor="entryDate" className="date-label">
            Entry Date:
          </label>
          <input
            type="date"
            id="entryDate"
            name="entryDate"
            value={entryDate}
            min={formattedMinDate}
            max={formattedMaxDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="date-picker"
          />

          <label htmlFor="exitDate" className="date-label">
            Exit Date:
          </label>
          <input
            type="date"
            id="exitDate"
            name="exitDate"
            value={exitDate}
            min={formattedMinDate}
            max={formattedMaxDate}
            onChange={(e) => setExitDate(e.target.value)}
            className="date-picker"
          />

          <label htmlFor="country-select" className="country-label">
            Select a Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="country-select"
          >
            <option value="">Select a country (optional)</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <div className="future-option">
            <div className="checkbox-container">
              {' '}
              <input
                type="checkbox"
                id="allowFuture"
                className="checkbox"
                checked={allowFuture}
                onChange={() => setAllowFuture(!allowFuture)}
              />
              <label htmlFor="allowFuture">Allow selecting future dates</label>
            </div>
            <div className="button-container">
              <button onClick={addTrip} className="add-trip-btn">
                Add Trip
              </button>
            </div>
          </div>

          <div className="calculation-div">
            <h2>
              Total Trip Days:{' '}
              <span className="lightblue-color">{totalDays}</span>
            </h2>
            <h2>
              Days Remaining:{' '}
              <span
                className={daysRemaining < 10 ? 'red-color' : 'lightblue-color'}
              >
                {daysRemaining}
              </span>
            </h2>
          </div>

          <div className="trips-table">
            <table>
              <thead>
                <tr>
                  <th>Trip No.</th>
                  <th>Entry Date</th>
                  <th>Exit Date</th>
                  <th>Country</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{trip.entryDate}</td>
                    <td>{trip.exitDate}</td>
                    <td>{trip.country || 'Not specified'}</td>
                    <td>{trip.dateDifference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
