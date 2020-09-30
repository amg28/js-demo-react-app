import React from 'react'

const CharacterCard = ({data}) => {

    const {name,image,gender, location, origin, species, status, episode} = data;
    console.log(name);

    return (
        <div className="card">
            <img className="card-img" src={image} alt="{name}"></img>
            <div className="card-name">{name}</div>
            <div className="card-details">
                <div>Gender: {gender}</div>
                <div>Location: {location.name}</div>
                <div>Origin: {origin.name}</div>
                <div>Species: {species}</div>
                <div>Status: {status}</div>
                <div>Episodes: {episode.length}</div>
            </div>
        </div>
    )
}

export default CharacterCard
