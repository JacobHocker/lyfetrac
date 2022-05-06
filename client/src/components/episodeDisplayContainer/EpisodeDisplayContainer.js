import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeDisplayHeader from '../episodeDisplayHeader/EpisodeDisplayHeader';
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

    
    return(
        <div className='episode-display-container'>
            {episode.id && <EpisodeDisplayHeader episode={episode} />}
        </div>
    );
}

export default EpisodeDisplayContainer;