import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './TelevisionDisplayInfo.scss';
import defaultCompany from '../../assets/images/defaultcompany.png';

function TelevisionDisplayInfo({ tvShow }) {
    
    
    return(
        <div className="television-display-info-container">
            <Container>
                <Row>
                    <Col>
                        <div className="tv-display-info-title">
                            <h1><em>{tvShow.name}'s</em> Details</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tv-info-networks-container">
                            <h3>Networks Aired On:</h3>
                            <div className="display-network-companies-container">
                                {tvShow.networks.map((network) => (
                                    <div className="display-network-company" key={network.id}>
                                        <img src={network.logo_path === null ? defaultCompany : `https://image.tmdb.org/t/p/w185${network.logo_path}`} alt={network.name} className='display-network-logo' />
                                        <p>{network.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tv-info-production-container">
                            <h3>Produced By:</h3>
                            <div className="display-production-companies-container">
                                {tvShow.production_companies.map((company) => (
                                    <div className="display-production-company" key={company.id}>
                                        <img src={company.logo_path === null ? defaultCompany : `https://image.tmdb.org/t/p/w185${company.logo_path}`} alt={company.name} className='display-company-logo' />
                                        <p>{company.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tv-info-display-type">
                            <div className="tv-info-display-type-item">
                                <h4>Show Type: {tvShow.type}</h4>
                            </div>
                            <div className="tv-info-display-type-item">
                                <h4>Show Status: {tvShow.status}</h4>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="tv-info-display-se">
                            <div className="tv-info-display-se-item">
                                <h4>Seasons: {tvShow.number_of_seasons}</h4>
                            </div>
                            <div className="tv-info-display-se-item">
                                <h4>Episodes: {tvShow.number_of_episodes}</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default TelevisionDisplayInfo;