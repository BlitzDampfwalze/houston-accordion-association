// src/App.js

import React from 'react';
import './App.css';
import houston2 from './images/HoustonAccordion2.jpg';
import houston1 from './images/HoustonAccordion1.jpg';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">

      <noscript>You need to enable JavaScript to run this app.</noscript>

      <section id="header">
        <header className="major">
          <h1>Houston Accordion Association</h1>
          <div className="info-background">
            <p>Music starts at 6:30 PM.</p>
            <p>Come and go as you please. Bring the family. Invite friends.</p>
          </div>
        </header>
        <div className="container">
          <ul className="actions special">
            <li><a href="#one" className="button primary scrolly">Learn more</a></li>
          </ul>
        </div>
      </section>

      <section id="one" className="main special">
        <div className="container">

          <div className="content">
            <header className="major">
              <h2>About the Houston Accordion Association</h2>
            </header>
            <div className="about-div-1">Founded in 1990, the association meets every month:</div>

            <div className="about-div">
              <div>Third Tuesday of every month, 6:30PM-9:00PM</div>
              <a className="bold" target="_blank" href="https://goo.gl/maps/gm7UncQWkhSsFQbMA">Pizza Inn | 1801 Mangum Rd</a>
              <div className="subtext">Each accordionist may play for 15-20 minutes<span className="span-style"></span></div>
              <Calendar />
            </div>

            <div className="about-div">
              <div className="title">Some of our members</div>
              <img className="images" src={houston2} alt="members" />
              <br />
              <img className="images" src={houston1} alt="members" />
            </div>

          </div>
          <p className="coming-soon">The website is new - more coming soon...</p>
        </div>
      </section>
      <section id="footer">
        <footer>
          <ul className="copyright">
            <li>&copy; Houston Accordion Association</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            <li>Images: <a href="http://unsplash.com">Unsplash</a></li>
          </ul>
        </footer>
      </section>
    </div>
  );
}

export default App;
