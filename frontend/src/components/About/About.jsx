import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>

      <h2>Beta Note</h2>
      <p>
        This app is in beta mode and is currently being developed. As a result,
        some features may not work exactly as expected. Please check back
        regularly for updates!
      </p>

      <h2>DISCLAIMER/Usage Statement</h2>
      <p>
        This app is for informational purposes only. Please be sure to check
        with your government and the countries you are visiting to confirm the
        rules concerning Schengen Zone visits. By using this app, you take full
        responsibility for your stays and efforts to ensure you are abiding by
        the legal requirements for staying in the Schengen Area.
      </p>
      <p>
        Safety and securtity information comes from the{' '}
        <a href="https://travel.state.gov/content/travel.html" target="_blank">
          US State Department's official website.
        </a>{' '}
        Calculatevisa.com is not responsible for information accuracy. It is the
        user's responsibility to thoroughly check and confirm travel advisories
        and safety information before traveling.
      </p>

      <h2>About</h2>
      <p>
        Nationals from many countries are allowed to stay a certain number of
        days in the Schengen Zone within a certain period. For Americans and
        many others, this is calculated on a rolling basis, which means that
        your stays are backdated 180 days. This can be confusing, and for those
        planning to spend long periods of time in the Schengen Zone, it could be
        frustrating to plan accordingly. This app will allow to calculate the
        number of days you spend in the Schengen Zone within a 180-day period to
        avoid overstaying or making other mistakes related to your stay.
      </p>

      <h2>How To Use</h2>
      <p>
        To use this app, simply input the dates of your trips within the
        Schengen Zone. The app will automatically calculate the total number of
        days that you have been in Schengen Zone countries at the bottom. The
        app will NOT allow you to input dates more than 180 days in the past. If
        you would like to input future dates, click the check box below the
        entry and exit date fields. It will automatically allow you to input
        future dates.
      </p>
      <h2>Attributions</h2>
      <p>
        Clock icon by{' '}
        <a href="https://icons8.com/" target="_blank">
          Icons8
        </a>
      </p>
    </div>
  );
};

export default About;
