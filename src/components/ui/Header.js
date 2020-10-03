import React from 'react'
import image from '../../img/rick-morty-logo.svg'
import RequestCounter from './RequestCounter'

const Header = ({requestCount}) => {
    return (
        <header className="header-container">
            <RequestCounter count={requestCount} />
            <img className="logo" src={image} alt="Rick and Morty logo"></img>
        </header>
    )
}

export default Header
