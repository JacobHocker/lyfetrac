import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CollectionDisplayHeader from '../collectionDisplayHeader/CollectionDisplayHeader';
import CollectionDisplayParts from '../collectionDisplayParts/CollectionDisplayParts';
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
    
    
    return(
        <div className='collection-display-container'>
            {collection.id && <CollectionDisplayHeader collection={collection} />}
            {collection.parts && <CollectionDisplayParts parts={collection.parts} name={collection.name}/>}
        </div>
    );
}

export default CollectionDisplayContainer;