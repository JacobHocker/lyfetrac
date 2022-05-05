import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EpisodeDisplayContainer.scss';

function EpisodeDisplayContainer() {

    const [episode, setEpisode] = useState({});


    const apiKey = '4a571a843827a09096250c11596c470d';
    const { tvId, seasonNumber,episodeNumber } = useParams();

    //EPISODE
    useEffect(() => {
        fetch(`/tv-episode/${tvId}/${seasonNumber}/${episodeNumber}/${apiKey}`)
        .then((r) => r.json())
        .then((episode) => { setEpisode(episode);
        });
    }, [tvId, seasonNumber, episodeNumber]);

    console.log(episode)
    return(
        <div className='episode-display-container'>

        </div>
    );
}

export default EpisodeDisplayContainer;