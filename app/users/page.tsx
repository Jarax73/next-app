import Link from 'next/link';
import React from 'react'
import User from '../components/User';

interface User {
    id: number;
    name: string;
    email: string;
}

async function getUser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    if(!res){
        throw new Error('Failed to fetch users')
    }
    return res.json()
}

const UsersPage = async () => {
    const users: User[] = await getUser();
  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                    <User key={user.id} user={user} />
                )}
            </tbody>
        </table>
    </>
  )
}

export default UsersPage;