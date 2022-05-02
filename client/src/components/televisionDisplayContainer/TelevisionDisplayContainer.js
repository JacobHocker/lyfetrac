import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TelevisionDisplayHeader from '../televisionDisplayHeader/TelevisionDisplayHeader';
import './TelevisionDisplayContainer.scss';

function TelevisionDisplayContainer() {
    const [tvShow, setTvShow] = useState({});


    const apiKey = '4a571a843827a09096250c11596c470d';
    const {id} = useParams()
    const pageNumber = 1
    //TV SHOW
    useEffect(() => {
        fetch(`/single-tv/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((tvShow) => { setTvShow(tvShow);
        });
    }, [id]);

    
    return(
        <div className='tv-display-container'>
            {tvShow.id && <TelevisionDisplayHeader tvShow={tvShow} />}
        </div>
    );
}

export default TelevisionDisplayContainer;