import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import Header from './components/Header/Header';
import FontComp from './components/FontComp/FontComp';
import LaunchesUi from './components/LaunchesUI/Launches.ui';


const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Launch />
      <LaunchDetails />  */}
      <FontComp />
      {/* <Launch /> */}
      {/* <LaunchesUi /> */}
      {/* <LaunchDetails />  */}
    </div>
  );
}

export default App;
