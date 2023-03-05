import React from 'react';
import ContactsList from './ContactsList';
import RightPane from './RightPane';
import styles from './chat.module.css';

const Chat = () => {
    return (
        <div className={styles.chat}>
            {[<ContactsList />]}
            <RightPane />
        </div>
    );
};

export default Chat;