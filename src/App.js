import React from 'react';
import './App.css';
import houston2 from './images/HoustonAccordion2.jpg';
import houston1 from './images/HoustonAccordion1.jpg';

function App() {
  return (
    <div className="App">

      <noscript>You need to enable JavaScript to run this app.</noscript>

      <section id="header">
        <header className="major">
          <h1>Houston Accordion Association</h1>
          <p>Bring your accordion! </p>
          <p>Play, listen, converse at our informal gathering of accordionist of all genres</p>
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
            <div className="about-div-1">Founded in 1990, the association meets twice a month.</div>

            <div className="about-div">
              <div>First Tuesday of every month, 6:30PM-9:00PM</div>
              <a className="bold" target="_blank" href="https://goo.gl/maps/SYB4cZu4ULj9sC86A">Son Nam Restaurant | 130 Gulfgate Mall</a>
              <div className="subtext">Each accordionist may play up to <span className="span-style">five</span> pieces of music.</div>
            </div>

            <div className="about-div">
              <div>Third Tuesday of every month, 6:30PM-9:00PM</div>
              <a className="bold" target="_blank" href="https://goo.gl/maps/gm7UncQWkhSsFQbMA">Pizza Inn | 1801 Mangum Rd</a>
              <div className="subtext">Each accordionist may play up to <span className="span-style">three</span> pieces of music.</div>
            </div>

            <div className="about-div">
              <div className="title">Some of our members</div>
              <img className="images" src={houston2} alt="members" />;
              <img className="images" src={houston1} alt="members" />;
            </div>


          </div>
          <div className="video"><iframe src="https://www.youtube.com/embed/FNPAzOmiA9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
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
