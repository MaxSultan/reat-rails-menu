import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

const  Menus = ({ menus, deleteMenu, updateMenu }) => {


    const displayMenus = () => {
        return menus.map(m => <Menu {...m} deleteMenu={deleteMenu}/>)
    }

    return(
        <Container>
            {displayMenus()}
        </Container>
    )
}

export default Menus;