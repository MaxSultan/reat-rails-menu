import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { Container } from 'semantic-ui-react';
import axios from 'axios'

const  Menus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        axios.get('/api/menus')
        .then((res) =>{
            console.log(res.data)
            setMenus(res.data)
        })
        .catch(err => console.log(err))
        // try{
        // const res = axios.get('/api/menus')
        // console.log(res.data)
        // setMenus(res.data)
        // } catch(err){
        //     console.log(err);
        // }
    }, [])

    const displayMenus = () => {
        return menus.map(m => <Menu {...m}/>)
    }

    return(
        <Container>
            {displayMenus()}
        </Container>
    )
}

export default Menus;