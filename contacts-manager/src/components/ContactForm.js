import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contactsSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addContact({ id: uuidv4(), name, phone }));
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <TextField
                label="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
            />
            <Button type="submit">Add Contact</Button>
        </form>
    );
}

export default ContactForm;
