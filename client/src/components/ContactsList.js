import React from 'react';
import { useEffect, useState } from 'react';

const Contact = ({ contact: {name, online, lastContacted} }) => {
    return (
        <div>
            <h3>{name}</h3>
            {online && <small>online </small>}
            <small>{lastContacted}</small>
        </div>
    )
}

const ContactsList = () => {
    const [contacts, setContacts] = useState([
        { _id: 1, name: 'Vitalya', online: true, lastContacted: 'yesterday' },
        { _id: 2, name: 'Mama', online: false, lastContacted: '3d ago' },
    ])

    useEffect(() => {
        const fetchContacts = async () => {
            const result = await fetch(`/api/contacts`)
            console.log(result)
            const data = await result.json()

            setContacts(data)
        }
        fetchContacts()
    }, [])

    return (
        <div className='pane'>
            {contacts && contacts.map(contact => <Contact contact={contact} key={contact._id}/>)}
        </div>
    );
};

export default ContactsList;