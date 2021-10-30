import React from 'react';
import './sidebarOption.css'

function SidebarOption({option,Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_Icon" />}
            {Icon ? <h4>{option}</h4>:<p>{option}</p>}
        </div>
    )
}

export default SidebarOption;


