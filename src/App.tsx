import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import Header from './components/Header/Header';
import Background from './components/BackgroundComponent/Background';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Background />
      {/* <Launch /> */}
      {/* <LaunchDetails /> */}
    </div>
  );
}

export default App;
