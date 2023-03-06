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

const Messages = ({ data: [currConvo, currUser, dbUpdated, setDbUpdated, socket] }) => {
    const [messages, setMessages] = useState([])
    const [messagesRecieved, setMessagesReceived] = useState([]);

    // Runs whenever a socket event is recieved from the server
    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
            console.log(currConvo._id, data.conversationId)
            if (currConvo._id === data.conversationId) {
                setMessagesReceived((state) => [
                    ...state,
                    {
                        text: data.message,
                        date: data.__createdtime__,
                        sender: data.sender
                    },
                ]);
            }

        });
        // Remove event listener on component unmount
        return () => socket.off('receive_message');
    }, [socket]);

    useEffect(() => {
        getMessages(currConvo._id).then(data => {
            setMessages(data.messages.sort((a, b) => a.date > b.date ? -1 : 1))
            setMessagesReceived([])
        })
    }, [currConvo])

    return (
        <div className='messages' id='scroller'>
            {messagesRecieved && messagesRecieved.sort((a,b)=> a.date > b.date? -1 : 1).map(message => <Message message={message} isMyMessage={currUser === message.sender} />)}
            {messages && messages.map(message => <Message key={message._id} message={message} isMyMessage={currUser === message.sender} />)}
        </div>
    );
};

export default Messages;