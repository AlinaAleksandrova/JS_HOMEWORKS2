import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import { Button } from '@mui/material';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <span>{contact.name} - {contact.phone}</span>
            <Button onClick={() => dispatch(deleteContact(contact))}>Delete</Button>
        </div>
    );
};

export default ContactItem;
