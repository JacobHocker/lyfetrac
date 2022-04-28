import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleDisplayHeader from "../peopleDisplayHeader/PeopleDisplayHeader";
import './PeopleDisplayContainer.scss';

function PeopleDisplayContainer() {
    const [person, setPerson] = useState({})

    const apiKey = '4a571a843827a09096250c11596c470d'
    const {id} = useParams()
    useEffect(() => {
        fetch(`/single-person/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((person) => setPerson(person))
    },[id])

    
    return(
        <div className="people-section-display-container">
            {person.name && <PeopleDisplayHeader person={person} />}
        </div>
    );
}

export default PeopleDisplayContainer;