import React from 'react'

const Button = ({name, url}) => {

    return (
        <div>
            <a href={url}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {name}
            </a>
        </div>
    )
}

export default Button
