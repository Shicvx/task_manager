import React from 'react';
import './style.css';
import axios from 'axios';
import {useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('/listusers')
        .then(res => setUsers(res.data.users))
        .catch(error => console.log(error))
    }, []);

    console.log(users);

    return (
        <>
        <div className="column_left">
        <h1>UserList</h1>

            {
                users?.map((user) => {
                    return(
                    <div key={user.id}>
                        <div className='profile'>
                            <img className="image" />
                            <h3> | {user.name} </h3>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default UserList