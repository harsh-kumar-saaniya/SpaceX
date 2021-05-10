import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import Header from './components/Header/Header';
import LaunchesUi from './components/LaunchesUI/Launches.ui';
import BackgroundConfig from './components/BackgroundStuff/BackgroundConfig';
import LaunchesList from './components/LauchesUI/LaunchesList';





const App = () => {
  return (
    <div className="App">
      <Header />
      <BackgroundConfig />
      
      {/* <LaunchesList /> */}
      
      <Launch />

      {/* <LaunchDetails />   */}
      
      {/* <Launch /> */}
      
      {/* <Launch /> */}
      
      {/* <LaunchesUi /> */}
      
      {/* <LaunchDetails />  */}
    </div>
  );
}

export default App;
