import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { ConvoContext } from '../context/ConvoContext';
import { getUsers } from '../actions';

const Dropdown = () => {
    const { currUser, setCurrUser, socket } = useContext(UserContext)
    const { currConvo, setCurrConvo } = useContext(ConvoContext)
    const [options, setOptions] = useState([])

    useEffect(() => {
        getUsers().then(data => {
            console.log(data)
            setOptions(data.users)
        })
    }, [])

    const handleChange = (e) => {
        setCurrUser(e.target.value)
        setCurrConvo('')
    }

    return (
        <select name="currUser" id="" onChange={handleChange}>
            <option value="DEFAULT" disabled selected> 
            </option> 
            {options.map(opt => <option key={opt._id} value={opt._id}>{opt.name}</option>)}
        </select>
    );
};

export default Dropdown;