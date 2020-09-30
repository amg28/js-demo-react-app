import React, {useState} from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/SearchBar';
import Footer from './components/ui/Navigation';
import CharactersGrid from './components/characters/CharactersGrid';
import './App.css';
import Navigation from './components/ui/Navigation';

const App = () => {

  //State: holds search results, which are later used for Character grid creation
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState();

  return (
  <div className="container">
    <Navigation />
    <Header />
    <Search setCharacters={setCharacters} />
    <div className="character-container">
      <CharactersGrid characters={characters} />
    </div>
  </div>);
}

export default App;
