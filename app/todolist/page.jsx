'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from '@/redux/Todoslice'

const todolist= () => {
 
    const[todo,settodo]=useState('')
    const dispatch=useDispatch()
    // const getdata=useSelector((data)=>data)
    const getdata=useSelector((state)=>state.todo.todos)
    console.log(getdata)
    
    
const handletodo=()=>{
  
    dispatch(addTodos(todo))
}
    

  return (
    <div className='pl-4'>
        <div>todolist</div>
        <input type='text' placeholder='add to do' onChange={(e)=>settodo(e.target.value)} className='border border-red-500' />
       <button className='bg-red-400' onClick={handletodo}>add to do</button>

       <div>display data</div>
       <div className='bg-red'>
{/* {getdata.map((item)=>(
  <div key={item.id}>{item.name}</div>
))} */}
       </div>
        </div>
  )
}

export default todolist