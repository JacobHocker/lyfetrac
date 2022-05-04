import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SeasonsContainerSections from "../seasonsContainerSections/SeasonsContainerSections";
//import { Link } from "react-router-dom";
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
    

    
    return(
        <div className="seasons-container">
            {tvShow.id && 
            <Container style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${tvShow.backdrop_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
                    }}>
                <Row>
                    
                    <Col>
                        <div className="seasons-container-title">
                            <h1>{tvShow.name}'s Seasons</h1>
                        </div>
                    </Col>
                </Row>
            </Container>}
            {tvShow.seasons && <SeasonsContainerSections seasons={tvShow.seasons} id={tvShow.id} />}
        </div>
    );
}

export default SeasonsContainer;