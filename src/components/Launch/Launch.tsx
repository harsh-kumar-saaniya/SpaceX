import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchesQuery;
}


const Launch: React.FC<Props> = ({ data }) => (
    <div className="launches">
        <h3>All Space X Launches</h3>
        <div className="launcheUi">
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i} className="LaunchesItem">
                        {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
                    </li>

                )
            )}
        </div>
    </div>
)

export default Launch;


{/* <div className="launchesUI">
<div className="mission-container">
    <h1>Mission</h1>
    <span>
        <p>here will the text</p>
    </span>
    <button>Detail</button>
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