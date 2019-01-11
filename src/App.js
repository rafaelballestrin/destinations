import React, { Component } from 'react';
import destinations from './images/destinations.jpg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="topBanner">
          <h1>DESTINATIONS</h1>
          <img src={destinations} alt='Destinations Cover' />
        </div>
          <div className='destinationsCon'>
            <div><h1>Rio de Janeiro</h1></div>
            <div><h1>São Paulo</h1></div>
            <div><h1>Brasília</h1></div>
          </div>
          <div className='destinationsCon'>
            <h1>Goiânia</h1>
            <h1>Recife</h1>
            <h1>Manaus</h1>
          </div>
      </div>
    );
  }
}

export default App;
