import React, { useContext } from 'react';
import ContactsList from './ContactsList';
import RightPane from './RightPane';
import './Chat.css';
import { UserContext } from '../context/UserContext'

const Chat = () => {
    const { currUser } = useContext(UserContext)
    return (
        <div className="chat">
            {currUser
                ? (<><ContactsList /><RightPane /></>)
                : <p className='placeholder'>Please, choose a user</p>
            }
        </div>
    );
};

export default Chat;