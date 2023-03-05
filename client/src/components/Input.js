import React, { useState } from 'react';
import { createMessage } from '../actions';

const Input = ({ data: [currConvo, currUser, setDbUpdated] }) => {
    const [value, setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        createMessage(currConvo, value, currUser)
            .then(data => {
                console.log(data)
                setValue('')
                setDbUpdated(true)
            })
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="message" id="message" value={value} onChange={(e) => {
                setValue(e.currentTarget.value);
            }} />
            <button type="submit">Send</button>
        </form>
    );
};

export default Input;