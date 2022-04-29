import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleDisplayHeader from "../peopleDisplayHeader/PeopleDisplayHeader";
import PeopleDisplayCast from "../peopleDisplayCast/PeopleDisplayCast";
import PeopleDisplayCrew from "../peopleDisplayCrew/PeopleDisplayCrew";
import './PeopleDisplayContainer.scss';

function PeopleDisplayContainer() {
    const [person, setPerson] = useState({})
    const [personCredits, setPersonCredits] = useState({});
    const [personImages, setPersonImages] = useState([]);
    const [personSocials, setPersonSocials] = useState([]);

    const apiKey = '4a571a843827a09096250c11596c470d'
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`/single-person/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((person) => setPerson(person))
    },[id])

    useEffect(() => {
        fetch(`/combined-credits/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((personCredits) => setPersonCredits(personCredits))
    },[id])
    useEffect(() => {
        fetch(`/person-images/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((personImages) => setPersonImages(personImages))
    },[id])
    useEffect(() => {
        fetch(`/person-socials/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((personSocials) => setPersonSocials(personSocials))
    },[id])

    
    
    return(
        <div className="people-section-display-container">
            {person.name && <PeopleDisplayHeader person={person} socials={personSocials} />}
            {personCredits.cast && <PeopleDisplayCast movies={personCredits.cast} />}
            {personCredits.crew && <PeopleDisplayCrew crew={personCredits.crew} />}
        </div>
    );
}

export default PeopleDisplayContainer;