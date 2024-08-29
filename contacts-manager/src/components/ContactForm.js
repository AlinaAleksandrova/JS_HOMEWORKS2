import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../store/contactsSlice';
import { TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = ({ contact, isEditing }) => {
    const [name, setName] = useState(contact ? contact.name : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { id: contact ? contact.id : uuidv4(), name, phone };

        if (isEditing) {
            dispatch(updateContact(newContact));
        } else {
            dispatch(addContact(newContact));
        }

        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" value={name} onChange={e => setName(e.target.value)} required />
            <TextField label="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
            <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
        </form>
    );
};

export default ContactForm;
