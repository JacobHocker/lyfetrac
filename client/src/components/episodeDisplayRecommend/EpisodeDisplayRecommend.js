import React from "react";
import './EpisodeDisplayRecommend.scss';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

function EpisodeDisplayRecommend({ seasons, episodes, name }) {

    const {tvId, seasonNumber} = useParams();

    const episodeMap = episodes.map((episode) => (
        <div className="recommend-cards-carousel-item" key={episode.id}>
            <Link to={`/tv/${tvId}/season/${seasonNumber}/episode/${episode.episode_number}`}>
                <Card  className='episode-recommend-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${episode.still_path}`}  className='recommend-card-img'/>
                    <Card.Body>
                        <Card.Title className='recommend-card-title'>{episode.name}</Card.Title> 
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text>Episode {episode.episode_number}</Card.Text>
                    </Card.Footer>
                </Card>
            </Link>
        </div>
    ))
    const seasonsMap = seasons.map((season) => (
        <div className="recommend-cards-carousel-item" key={season.id}>
            <Link to={`/tv/${tvId}/season/${season.season_number}`}>
                <Card  className='recommend-card'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${season.poster_path}`}  className='recommend-card-img'/>
                    <Card.Body>
                        <Card.Title className='recommend-card-title'>{season.name}</Card.Title> 
                    </Card.Body>
                </Card>
            </Link>
        </div>
    ))
    const responsive = {
        xxLarge: {
            breakpoint: { max: 3000, min: 1401 },
            items: 5
        },
        xLarge: {
            breakpoint: { max: 1400, min: 1201 },
            items: 5
        },
        large: {
            breakpoint: { max: 1200, min: 993 },
            items: 4
        },
        medium: {
            breakpoint: { max: 992, min: 769 },
            items: 3
        },
        small: {
            breakpoint: { max: 768, min: 577 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        }
    };
    return(
        <div className="episode-display-recommend-container">
            <Container>
                <Row>
                    <Col>
                        <div className='display-recommend-header'>
                            <h1>Episodes in Season {seasonNumber}</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='episode-recommend-carousel-col'>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {episodeMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className='display-recommend-header'>
                            <h1>More Seasons from <em>{name}</em></h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='episode-recommend-carousel-col'>
                        <Carousel responsive={responsive} showDots={false} autoPlay={false} >
                            {seasonsMap}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EpisodeDisplayRecommend;