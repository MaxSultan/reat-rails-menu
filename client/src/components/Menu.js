import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const Menu = ({ id, name, deleteMenu }) => {
    return(
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <h1>{name}</h1> 
        <Icon size='big' color='red' name='window close' onClick={() => deleteMenu(id)}/>
    </div>
    )
}

export default Menu