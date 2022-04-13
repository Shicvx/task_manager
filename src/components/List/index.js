import React from 'react';
import './style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/actions';


const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.User.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);


    return (
        <>
        <div className="column_left">
        <h1>UserList</h1>

            {
                users?.map((user) => {
                    return(
                    <div key={user.id}>
                        <div className='profile'>
                            <img className="image"/>
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