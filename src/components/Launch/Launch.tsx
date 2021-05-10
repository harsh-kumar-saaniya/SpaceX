import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import LaunchDetails from '../LaunchDetails/LaunchDetails';
import './style.css';

interface Props {
    data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => (
    <div className="launchesList">
        <div className="launchesContainer">
            <div className="launchesHeading">
                <h1 id="LauchesItemRef">All SpaceX Launches</h1>
            </div>
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <div key={i} className="listItems">

                        <div className="missionName"><h2>Mission Name: {launch.mission_name}</h2></div>
                        <div className="missionYear"><p>Mission Year: {launch.launch_year} - Flight: {JSON.stringify(launch.launch_success) ? "Success" : "unsuccess"}</p></div>
                        <div className="Detail"><button>DETAIL </button></div>

                        {/* {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)}) */}
                    </div>
                    // {JSON.stringify(launch.launch_success)}
                )
            )}
        </div>
    </div>
    // </div >
)

export default Launch;



{/* <div className="launchesList">
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
</div> */}






{/* <div className="launches">
        <h3>All Space X Launches</h3>
        <ol className="launchesOL">
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i} className="LaunchesItem">
                        {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
                    </li>
                )
            )}
        </ol>
    </div> */}













    // <div className="launches">
    //     <h3>All Space X Launches</h3>
    //     <div className="launcheUi">
    //         {!!data.launches && data.launches.map(
    //             (launch, i) => !!launch && (
    //                 <li key={i} className="LaunchesItem">
    //                     {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
    //                 </li>

    //             )
    //         )}
    //     </div>
    // </div>