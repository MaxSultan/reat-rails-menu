import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


const MenuForm = ({ addMenu }) => {
    const [name, setName] = useState('') 

    const handleSubmit = (e) => {
        addMenu(name);
        setName("")
    }

    const handleChange = (e) => {
        setName(e.target.value)
    } 

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            required
            label={'menu name'} 
            placeholder={'menu name'} 
            value={name}
            onChange={handleChange}></Form.Input>
            <Form.Button>Add</Form.Button>
        </Form>
    )
}

export default MenuForm