import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import CollectionCard from "../collectionCard/CollectionCard";
import MovieCard from "../movieCard/MovieCard";
import PeopleCard from "../peopleCard/PeopleCard";
import TelevisionCard from "../televisionCard/TelevisionCard";
import './SearchFilmCardDisplay.scss';


function SearchFilmCardDisplay({activeCategory, props}){

    
    return(
        <div className="search-film-card-display-container">
            <Container>
                {activeCategory === "movie-search" ? 
                <CardGroup>
                        {props.results && props.results.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                posterPath={movie.poster_path}
                                id={movie.id}
                                rating={movie.vote_average}
                            />
                        )) }
                </CardGroup>
                : <div></div>}
                {activeCategory === "tv-search" ?
                    <CardGroup>
                        {props.results && props.results.map((tv) => (
                            <TelevisionCard
                                key={tv.id}
                                title={tv.name}
                                posterPath={tv.poster_path}
                                id={tv.id}
                                rating={tv.vote_average}
                            />
                        )) }
                    </CardGroup>
                : <div></div>}
                {activeCategory === "person-search" ?
                <CardGroup>
                    {props.results && props.results.map((people) => (
                        <PeopleCard
                            key={people.id}
                            id={people.id}
                            personPicture={people.profile_path}
                            name={people.name}
                            knownFor={people.known_for_department}
                        />
                    )) }
                </CardGroup>
                : <div></div>}
                {activeCategory === "collection-search" ?
                <CardGroup>
                    {props.results && props.results.map((collect) => (
                        <CollectionCard
                            key={collect.id}
                            id={collect.id}
                            posterPath={collect.poster_path}
                            name={collect.name}
                        />
                    )) }
                </CardGroup>
                : <div></div>}
            </Container>
        </div>
    );
}

export default SearchFilmCardDisplay;