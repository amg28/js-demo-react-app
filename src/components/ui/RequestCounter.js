import React from 'react'
import {useSelector} from 'react-redux'
import {countSelector} from '../../slices/requestCounterSlice'

const RequestCounter = () => {

    const count = useSelector(countSelector);

    return (
        <div className="counter-container">
            <div className="counter-count">{count}</div>
            <div>Requests</div>
        </div>
    )
}

export default RequestCounter
