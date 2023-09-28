import React from 'react'

export async function generateStaticParams() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await users.json();
   
    return data.map((user:any) => ({
      user: user.user,
    }))
  }

  async function getUser(id:number){
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await user.json();
    return data
  }


export default async function User({params}:any) {
    const user = await getUser(params.user);
    console.log("object", user);
  return (
    <>
        <h1>Utilisateur</h1>
        <div className='flex mb-2'>
            <p>Name : </p>
            <p>{user.name}</p>
        </div>
        <div className='flex mb-2'>
            <p>Email : </p>
            <p>{user.email}</p>
        </div>
        <div className='flex mb-2'>
            <p>Phone : </p>
            <p>{user.phone}</p>
        </div>
    </>
  )
}
