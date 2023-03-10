import { ConvoContext } from "../context/ConvoContext";
import React, { useState } from "react";
import io from 'socket.io-client'; 

const socket = io.connect('/');

export const ConvoProvider = ({ children }) => {
    const [currConvo, setCurrConvo] = useState();
    const setCurrConvoAndEmit = ({currConvo, currUser}) => {
        setCurrConvo(currConvo)
        socket.emit("choose_convers", {currConvo, currUser})
    }

    return (
        <ConvoContext.Provider value={{ currConvo, setCurrConvoAndEmit, setCurrConvo, socket }}>
            {children}
        </ConvoContext.Provider>
    );
};

export default ConvoProvider;