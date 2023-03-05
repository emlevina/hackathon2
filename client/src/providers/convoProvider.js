import { ConvoContext } from "../context/ConvoContext";
import React, { useState } from "react";

export const ConvoProvider = ({ children }) => {
    const [currConvo, setCurrConvo] = useState();

    return (
        <ConvoContext.Provider value={{ currConvo, setCurrConvo }}>
            {children}
        </ConvoContext.Provider>
    );
};

export default ConvoProvider;