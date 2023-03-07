import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ConvoContext } from '../context/ConvoContext';
import { getConvo, getUsers, createConvo } from '../actions';

const Contact = ({ contact: { name, online, _id } }) => {
    const { currConvo, setCurrConvoAndEmit } = useContext(ConvoContext)
    const { currUser } = useContext(UserContext)

    const clickHandler = (e) => {
        e.preventDefault()
        getConvo(currUser, _id)
            .then(data => {
                // console.log(data)
                if (!data.conv) {
                    createConvo(currUser, _id)
                        .then(data => {
                            setCurrConvoAndEmit({currConvo: data.conv, currUser})
                        })
                } else {
                    setCurrConvoAndEmit({currConvo: data.conv, currUser})
                }
            })

    }

    return (
        <div onClick={clickHandler} className={currConvo && currConvo.participants.includes(_id) ? 'contact active' : 'contact'}>
            <p>{name}</p>
            {online && <small>online </small>}
            <small>{ }</small>
        </div>
    )
}

const ContactsList = () => {
    const { currUser } = useContext(UserContext)
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