import React from 'react'

const CharacterCard = ({name, image}) => {

    return (
        <div className="card">
            <img className="card-img" src={image} alt="{name}"></img>
            <div className="card-name">{name}</div>
        </div>
    )
}

export default CharacterCard
