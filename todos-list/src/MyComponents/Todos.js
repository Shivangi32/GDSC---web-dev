import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
      {props.todos.map((todo)=>{
           return <TodoItem todo={todo}/>
      })}
      
    </div>
  )
}
