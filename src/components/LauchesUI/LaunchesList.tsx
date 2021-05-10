import React from 'react';
import './LauchesList.css';

const LaunchesList = () => {
    return (
        <div className="launchesList">
            <div className="launchesContainer">
                <div className="launchesHeading">
                    <h1>All SpaceX Launches</h1>
                </div>
                <div className="listItems">
                    <div className="missionName"><h2>Mission Name: Falcon</h2></div>
                    <div className="missionYear"><p>Mission Year: 2009 - Flight: success</p></div>
                    <div className="Detail"><button>DETAIL </button></div>
                </div>
            </div>
        </div>
    )
}

export default LaunchesList;
