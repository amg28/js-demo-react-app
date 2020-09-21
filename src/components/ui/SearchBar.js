import React from 'react'
import sendHttpRequest from '../../util.js';

const SearchBar = ({setCharacters}) => {

    function search(event) {
        event.preventDefault();
        const query = document.getElementById('search').value;
        sendHttpRequest('GET', `https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(responseData => setCharacters(responseData.results))
            .catch(error => handleError(error));
    }

    function handleError({error}){
        const element = document.getElementById('search-error');
        element.classList.remove('hidden');
        element.innerHTML = `Ops, looks like something went wrong... Reason: "${error}"`;
        setTimeout(() => {element.classList.add('hidden')},5000);
    }

    return (
        <div className="search-section">
                <div className="search-container">
                    <input className="search-bar" type="search" name="search" placeholder="Try to type Rick..." id="search"></input>
                    <input className="search-button" type="submit" value="Search" onClick={search}></input>
                    <div className="error hidden" id="search-error"></div>
                </div>
        </div>
    )
}

export default SearchBar
