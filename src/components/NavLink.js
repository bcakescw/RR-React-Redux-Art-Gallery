import React from 'react'
import { useSelector } from 'react-redux';

function NavLink(props) {
    const mode = useSelector(state => state);

    return (
        <div className="NavLink" style={{'backgroundColor': 'mode.color3'}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
