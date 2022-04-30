import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollectionDisplayContainer.scss';

function CollectionDisplayContainer() {
    const [collection, setCollection] = useState({});
    
    const apiKey = '4a571a843827a09096250c11596c470d'
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`/single-collection/${id}/${apiKey}`)
        .then((r) => r.json())
        .then((collection) => setCollection(collection))
    },[id])
    
    console.log(collection)
    return(
        <div className='collection-display-container'>
            <h1>Collection</h1>
        </div>
    );
}

export default CollectionDisplayContainer;