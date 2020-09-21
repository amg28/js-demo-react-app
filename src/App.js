import React, {useState} from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/SearchBar';
import CharactersGrid from './components/characters/CharactersGrid';
import './App.css';

const App = () => {

  //State: holds search results, which are later used for Character grid creation
  const [characters, setCharacters] = useState([]);

  return (
  <div className="container">
    <Header />
    <Search setCharacters={setCharacters} />
    <div className="character-container">
      <CharactersGrid characters={characters} />
    </div>
  </div>);
}

export default App;
