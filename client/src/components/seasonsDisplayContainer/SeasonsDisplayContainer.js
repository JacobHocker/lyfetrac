import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SeasonDisplayHeader from "../seasonsDisplayHeader/SeasonDisplayHeader";
import './SeasonsDisplayContainer.scss';

function SeasonsDisplayContainer() {
    const [season, setSeason] = useState({});


    const apiKey = '4a571a843827a09096250c11596c470d';
    const { tvId, seasonNumber } = useParams();

    //SEASON
    useEffect(() => {
        fetch(`/tv-season/${tvId}/${seasonNumber}/${apiKey}`)
        .then((r) => r.json())
        .then((season) => { setSeason(season);
        });
    }, [tvId, seasonNumber]);

    

    return(
        <div className="seasons-display-container">
            {season.id && <SeasonDisplayHeader season={season} />}
        </div>
    );
}

export default SeasonsDisplayContainer;