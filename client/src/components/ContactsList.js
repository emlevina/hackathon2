import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ConvoContext } from '../context/ConvoContext';
import { getConvo, getUsers, createConvo } from '../actions';

const Contact = ({ contact: { name, online, lastContacted, _id } }) => {
    const { currConvo, setCurrConvo } = useContext(ConvoContext)
    const { currUser } = useContext(UserContext)

    const clickHandler = (e) => {
        e.preventDefault()
        getConvo(currUser, _id)
            .then(data => {
                console.log(data)
                if (!data.conv) {
                    createConvo(currUser, _id)
                        .then(data => setCurrConvo(data.conv._id))
                } else {
                    setCurrConvo(data.conv._id)
                }
            })

    }

    return (
        <div onClick={clickHandler} className='contact'>
            <p>{name}</p>
            {online && <small>online </small>}
            <small>{ }</small>
        </div>
    )
}

const ContactsList = ({socket}) => {
    const { currUser, setCurrUser } = useContext(UserContext) // default user Ekaterina
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        if (currUser) {
            getUsers()
                .then(data => {
                    setContacts(data.users.filter(user => user._id !== currUser))
                })
        }

    }, [currUser])

    return (
        <div className='contacts'>
            {contacts && contacts.map(contact => <Contact contact={contact} key={contact._id} />)}
        </div>
    );
};

export default ContactsList;