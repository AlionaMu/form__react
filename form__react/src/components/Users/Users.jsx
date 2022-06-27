import React from 'react';

const Users = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    return (
        <div className='users'>
         { data }
        </div>
    )
}

export default Users;