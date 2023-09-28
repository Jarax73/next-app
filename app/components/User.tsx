"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function User({user}) {
    const router = useRouter()
    function handleClick(){
        router.push(`/users/${user.id}`);
    }
  return (
    <tr onClick={handleClick}>
        <td>{user.name}</td>
        <td>{user.email}</td>
    </tr>
  )
}
