import React, { useContext, useState } from 'react';
import Input from './Input';
import Messages from './Messages';
import { ConvoContext } from '../context/ConvoContext';
import { UserContext } from '../context/UserContext';

const RightPane = () => {
    const { currConvo, socket } = useContext(ConvoContext)
    const { currUser } = useContext(UserContext)

    return (

        currConvo
            ? (<div className='messagesPane'>
                <Messages data={[currConvo, currUser, socket]} />
                <Input data={[currConvo, currUser, socket]} /></div>
            )
            : (<p className='placeholder'>Choose conversation on the left</p>)

    );
};

export default RightPane;