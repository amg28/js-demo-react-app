import React from 'react'
import sendHttpRequest from '../../util.js';
import { useDispatch } from 'react-redux';
import { increment } from '../../app/slices/requestCounterSlice'

const SearchBar = ({ setCharacters }) => {

    const dispatch = useDispatch();

    function search(event) {
        event.preventDefault();
        const query = document.getElementById('search').value;
        sendHttpRequest('GET', `https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(responseData => handleSuccess(responseData))
            .catch(error => handleError(error));
    }

    function onEnter(event) {
        if (event.key === 'Enter') {
            search(event);
        }
    }

    function handleSuccess(responseData) {
        dispatch(increment());
        setCharacters(responseData.results)
    }

    function handleError({ error }) {
        const element = document.getElementById('search-error');
        element.classList.remove('hidden');
        element.innerHTML = `Ops, looks like something went wrong... Reason: "${error}"`;
        setTimeout(() => { element.classList.add('hidden') }, 5000);
    }

    return (
        <div className="search-section">
            <div className="search-container">
                <input className="search-bar" type="search" name="search" placeholder="Try to type Rick..." id="search" onKeyDown={onEnter}></input>
                <input className="search-button" type="submit" value="Search" onClick={search}></input>
                <div className="error hidden" id="search-error"></div>
            </div>
        </div>
    )
}

export default SearchBar
