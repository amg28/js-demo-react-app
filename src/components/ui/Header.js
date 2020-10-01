import React from 'react'
import image from '../../img/rick-morty-logo.svg'
import RequestCounter from './RequestCounter'

const Header = () => {
    return (
        <header className="header-container">
            <RequestCounter />
            <img className="logo" src={image} alt="Rick and Morty logo"></img>
        </header>
    )
}

export default Header
