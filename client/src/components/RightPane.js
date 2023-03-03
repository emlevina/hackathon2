import React from 'react';
import Input from './Input';
import Messages from './Messages';

const RightPane = () => {
    return (
        <div className='pane'>
            <Messages />
            <Input />
        </div>
    );
};

export default RightPane;