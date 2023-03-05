import React from 'react';
import { createMessage } from '../actions';

const Input = ({data: [currConvo, currUser, setDbUpdated]}) => {
    const submitHandler = (e) => {
        e.preventDefault()
        createMessage(currConvo, e.target.message.value, currUser)
        .then(data => {
            console.log(data)
            e.target.reset()
            setDbUpdated(true)
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="message" id="message" />
            <button type="submit">Send</button>
        </form>
    );
};

export default Input;