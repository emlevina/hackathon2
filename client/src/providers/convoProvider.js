import { ConvoContext } from "../context/ConvoContext";
import React, { useState } from "react";
import io from 'socket.io-client'; 

export const ConvoProvider = ({ children }) => {
    const [currConvo, setCurrConvo] = useState();
    // const socket =''
    const socket = io.connect('http://localhost:3001');

    return (
        <ConvoContext.Provider value={{ currConvo, setCurrConvo, socket }}>
            {children}
        </ConvoContext.Provider>
    );
};

export default ConvoProvider;