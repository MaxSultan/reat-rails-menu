import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'


const MenuForm = () => {
    const [name, setName] = useState('') 

    const handleSubmit = (e) => {
        //e.preventDefault()
        console.log(e)
    }

    return (
        <Form onSubmit={() => handleSubmit()}>
            <Form.Input 
            label={'menu name'} 
            placeholder={'menu name'} 
            value={name}
            onChange={(e) => setName(e)}></Form.Input>
            <Form.Button>Add</Form.Button>
        </Form>
    )
}

export default MenuForm