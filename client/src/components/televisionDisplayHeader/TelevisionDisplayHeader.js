import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import defaultMovie from '../../assets/images/defaultmovie.jpg';
import { AiOutlineUnorderedList, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import './TelevisionDisplayHeader.scss';

function TelevisionDisplayHeader({ tvShow }) {

    const ratingDecimal = (tvShow.vote_average / 10) * 100
    const ratingPercentage = Math.round(ratingDecimal)
    const tvRatings = () => {
        if(ratingPercentage <= 10) {
            return <p className="display-terrible-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 10 && ratingPercentage <= 30) {
            return <p className="display-poor-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 30 && ratingPercentage <= 60) {
            return <p className="display-fair-rated">{ratingPercentage}%</p>
        } if (ratingPercentage >= 60 && ratingPercentage <= 90) {
            return <p className="display-good-rated">{ratingPercentage}%</p>
        } else {
            return <p className="display-great-rated">{ratingPercentage}%</p>
        }
    }

    
    return(
        <div className='tv-display-header-container'>
            <Container>
                <div className="tv-display-header" 
                    style={{ 
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${tvShow.backdrop_path})`,
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: "100%",
                        boxShadow: "inset 0 0 0 1000px rgba(52.5, 73.5, 115.5,.85)"
                    }}>
                    <Row>
                        <Col>
                            <div className="tv-poster-display-container">
                                <img src={tvShow.poster_path === null ? defaultMovie : `https://image.tmdb.org/t/p/w300${tvShow.poster_path}`} alt={tvShow.name} className="tv-display-poster" />
                            </div>
                        </Col>
                        <Col>
                            <div className='tv-display-title-container'>
                                <div className="tv-display-title">
                                    <h1>{tvShow.name}</h1> 
                                </div>
                            
                                <div className="tv-title-info-container">
                                    <div className="tv-display-release">
                                        <p> First Aired: {tvShow.first_air_date}</p>
                                    </div>
                                </div>
                                <div className="tv-display-interact-container">
                                    <div className="tv-display-rating">
                                        {tvRatings()}
                                    </div>
                                    <div className="tv-display-favorite">
                                        <AiOutlineStar className="tv-display-add-favorite"/>
                                    </div>
                                    <div className="tv-display-to-list">
                                        <AiOutlineUnorderedList className="tv-display-add-list"/>
                                    </div>
                                    <div className="tv-display-trailer">
                                        <BsFillPlayFill className="tv-display-play-button"/>
                                    </div>
                                </div>
                                <div className="tv-tagline-display">
                                    <h4><em>{tvShow.tagline}</em></h4>
                                </div>
                                <div className="tv-summary-container">
                                    <div className="tv-summary-body">
                                        <p>{tvShow.overview}</p>
                                    </div>
                                </div>
                                <div className="tv-display-genres">
                                    {tvShow.genres.map((genre) => (
                                        <p key={genre.id}>| {genre.name} |</p>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default TelevisionDisplayHeader;