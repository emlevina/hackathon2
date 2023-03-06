import React, { useEffect, useState } from 'react';
import { getMessages } from '../actions';

const Message = ({ message: { text, date }, isMyMessage }) => {
    return (
        <div className={`message ${isMyMessage ? 'myMessage' : 'notMyMessage'}`}>
            <p>{text}</p>
            <small>{new Date(date).toLocaleString()}</small>
        </div>
    )
}

const Messages = ({ data: [currConvo, currUser, dbUpdated, setDbUpdated] }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages(currConvo).then(data => {
            setMessages(data.messages)
            setDbUpdated(false)
        })
    }, [currConvo, dbUpdated])

    return (
        <div className='messages'>
            {messages && messages.map(message => <Message key={message._id} message={message} isMyMessage={currUser === message.sender} />)}
        </div>
    );
};

export default Messages;