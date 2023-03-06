import React, { useState } from 'react';
import { createMessage } from '../actions';

const Input = ({ data: [currConvo, currUser, socket] }) => {
    const [value, setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        socket.emit('send_message', { currUser, currConvo, value })
        createMessage(currConvo, value, currUser)
            .then(data => {
                console.log(data)
                setValue('')
            })

    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            submitHandler(e);
        }
    }

    return (
        <form onSubmit={submitHandler} className='input'>
            <textarea name="message" id="message" value={value} onChange={(e) => {
                setValue(e.currentTarget.value);
            }} onKeyDown={onEnterPress}></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default Input;