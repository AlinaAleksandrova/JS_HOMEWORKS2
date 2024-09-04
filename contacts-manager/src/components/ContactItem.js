import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../features/contactsSlice';
import Button from '@mui/material/Button';

function ContactItem({ contact }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };
    return (
        <div>
            <span>{contact.name} - {contact.phone}</span>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
        </div>
    );
}

export default ContactItem;
