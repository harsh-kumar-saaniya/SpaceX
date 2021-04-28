import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>Launch unavaliable</div>;
    }
    return (
        <div className="launchDetails">
            <div className="launchDetailStatus">
                <span>Flight{data.launch.flight_number}: </span>
            </div>
            <div>
                <h3>
                    {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
                </h3>
                <p>launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
                <p>{data.launch.details}</p>
                {!!data.launch.links && !!data.launch.links.flickr_images && (
                    <div>
                        {data.launch.links.flickr_images.map(image => {
                            image ? <img src={image} /> : null
                        })}
                    </div>
                )}
            </div>
        </div>
    )
};

export default LaunchDetails;