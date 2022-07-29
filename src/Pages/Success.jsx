import React from 'react';
import {NavLink} from 'react-router-dom'

const Success = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Message Received 😍</h1>
                </div>
                <NavLink to="/">back to homepage</NavLink>
            </div>
        </div>
    )
}

export default Success