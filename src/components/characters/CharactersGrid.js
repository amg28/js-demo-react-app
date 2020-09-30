import React from 'react'
import CharacterCard from './CharacterCard'

const CharactersGrid = ({characters}) => {
    return characters
    .map(character => <CharacterCard key={character.id} data={character}/>); 
}

export default CharactersGrid
