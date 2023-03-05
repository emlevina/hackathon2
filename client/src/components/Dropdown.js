import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getUsers } from '../actions';

const Dropdown = () => {
    const { setCurrUser } = useContext(UserContext)
    const [options, setOptions] = useState([])
    useEffect(() => {
        getUsers().then(data => {
            console.log(data)
            setOptions(data.users)
        })
    }, [])

    return (
        <select name="currUser" id="" onChange={(e) => setCurrUser(e.target.value)}>
            <option value="DEFAULT" disabled selected> 
            </option> 
            {options.map(opt => <option key={opt._id} value={opt._id}>{opt.name}</option>)}
        </select>
    );
};

export default Dropdown;