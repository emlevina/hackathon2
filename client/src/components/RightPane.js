import React, { useContext, useState } from 'react';
import Input from './Input';
import Messages from './Messages';
import { ConvoContext } from '../context/ConvoContext';
import { UserContext } from '../context/UserContext';

const RightPane = () => {
    const { currConvo, socket } = useContext(ConvoContext)
    const { currUser } = useContext(UserContext)
    const [dbUpdated, setDbUpdated] = useState(false)

    return (
        <div className='pane'>
            {currConvo ? (<>
                <Messages data={[currConvo, currUser, dbUpdated, setDbUpdated]} />
                <Input data={[currConvo, currUser, setDbUpdated]} /></>
            ) : (<>Choose conversation on the left</>)}

        </div>
    );
};

export default RightPane;