import React from 'react'

const RequestCounter = ({count}) => {

    return (
        <div className="counter-container">
            <div className="counter-count">{count}</div>
            <div>Requests</div>
        </div>
    )
}

export default RequestCounter
