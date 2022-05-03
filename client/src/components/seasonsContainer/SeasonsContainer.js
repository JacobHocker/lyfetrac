import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './SeasonsContainer.scss';

function SeasonsContainer() {
    const [tvShow, setTvShow] = useState({});

    const apiKey = '4a571a843827a09096250c11596c470d';
    const {id} = useParams()
    
    //TV SHOW
    useEffect(() => {
        fetch(`/single-tv/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((tvShow) => { setTvShow(tvShow);
        });
    }, [id]);
    

    console.log(tvShow)
    return(
        <div className="seasons-container">
            
        </div>
    );
}

export default SeasonsContainer;