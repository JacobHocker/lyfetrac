import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './PeopleDisplayHeader.scss';

function PeopleDisplayHeader({ person }) {


    function getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }
    function getDeadAge(born, died) {
        let deathDate = new Date(died);
        let birthDate = new Date(born);
        let age = deathDate.getFullYear() - birthDate.getFullYear();
        let m = deathDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }
    const age = getAge(person.birthday)
    const ageIfDead = getDeadAge(person.birthday, person.deathday)
    console.log(person)
    return(
        <div className="people-display-header-container">
            <Container>
                <Row>
                    <Col>
                        <div className="people-display-header-image">
                            <img src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} className="person-display-image" alt={person.name} />
                        </div>
                    </Col>
                    <Col>
                        <div className="people-display-header-info-container">
                            <div className="people-display-header-name">
                                <h1>{person.name}</h1>
                            </div>
                            <div className="people-display-birth-info">
                                <div className="people-display-birthday">
                                    <h3>Born: {person.birthday}</h3>
                                </div>
                                <div className="people-display-age">
                                    {person.deathday === null ? <h3>Age: {age}</h3> : <h3>Died: {person.deathday} ({ageIfDead} years old) </h3>}
                                </div>
                                <div className="people-display-birth-place">
                                    <h3>Birth Place: {person.place_of_birth}</h3>
                                </div>
                                <div className="people-display-page-known-for">
                                    <h3>Known For: {person.known_for_department}</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="people-display-biography">
                            <div className="people-display-bio-header">
                                <h2>Biography:</h2>
                            </div>
                            <div className="people-display-bio-body">
                                <p>{person.biography}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PeopleDisplayHeader;