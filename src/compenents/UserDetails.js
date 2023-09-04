import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id} = useParams();
    const { count, contacts } = useSelector((state) => state.counter)
    console.log(contacts)
    // const {name, email} = contacts[id]
  return (
    <div>UserDetails id is {id}
    {/* <h3>{name}</h3>
    <h3>{email}</h3> */}
    </div>
  )
}

export default UserDetails