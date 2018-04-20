import React from 'react';

const Pitomac = props => {
    return (
        <li onClick={() =>props.onSelect(props.pitomac)} 
        className={props.pitomac===props.selectedPitomac? 'selected': ''}
        >
            <button className = "delete-button">Delete</button>
            <div className="pitomac-element">
                <div className="badge">{props.pitomac.id}</div>
                <div className="name">{props.pitomac.name}</div>    
            </div>
        </li>
    );
}

export default Pitomac;