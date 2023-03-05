import { UserContext } from "../context/UserContext";
import React, { useState } from "react";

export const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState();

    return (
        <UserContext.Provider value={{ currUser, setCurrUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;