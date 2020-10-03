import React from 'react';

import Header from './components/ui/Header';
import Search from './components/ui/SearchBar';
import CharactersGrid from './components/characters/CharactersGrid';
import Navigation from './components/ui/Navigation';
import './App.css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { increment, countSelector } from './slices/requestCounterSlice';
import { setCharacters, charactersSelector } from './slices/charactersSlice';

const App = () => {

  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const count = useSelector(countSelector);

  const incrementCounter = () => dispatch(increment());
  const updateCharacters = characters => dispatch(setCharacters(characters));

  return (
    <div className="container">
      <Navigation />
      <Header requestCount={count} />
      <Search updateCharacters={updateCharacters} incrementCounter={incrementCounter} />
      <div className="character-container">
        <CharactersGrid characters={characters} />
      </div>
    </div>);
}

export default App;
