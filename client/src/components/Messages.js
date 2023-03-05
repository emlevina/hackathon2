import React, { useEffect, useState } from 'react';
import { getMessages } from '../actions';

const Message = ({message: {text}, isMyMessage}) => {
    return (
        <div>
            <p style={isMyMessage ? {textAlign: "right", background: "gray"} : {textAlign: "left", background: "lightgray"}}>{text}</p>
        </div>
    )
}

const Messages = ({data: [currConvo, currUser, dbUpdated, setDbUpdated]}) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages(currConvo).then(data => {
            setMessages(data.messages)
            setDbUpdated(false)
        })
    }, [currConvo, dbUpdated])

    return (
        <div>
            {messages && messages.map(message => <Message key={message._id} message={message} isMyMessage={currUser === message.sender}/>)}
        </div>
    );
};

export default Messages;