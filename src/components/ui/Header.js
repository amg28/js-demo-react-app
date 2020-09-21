import React from 'react'
import image from '../../img/rick-morty-logo.png'

const Header = () => {
    return (
        <header className="header-container">
            <img className="logo" src={image} alt="Rick and Morty logo"></img>
        </header>
    )
}

export default Header
