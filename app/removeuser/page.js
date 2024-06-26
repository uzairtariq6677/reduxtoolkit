'use client'
import { removeUser } from '@/redux/Slice'
import React from 'react'
import { useSelector,dispatch, useDispatch } from 'react-redux'

const page = () => {
    const data=useSelector((state)=>state.users.users)
   const dispatch=useDispatch()
  return (
    <div>
        <h1>Remove user</h1>
        {data.map((item)=>(
            <div>
                <span>{item.name}</span>
                <button onClick={()=>dispatch(removeUser(item.id))}>x</button>
                </div>
        ))}
    </div>
  )
}

export default page