import React from 'react'


export default function TodoItem(todo) {
  return (
    <div>
      <h4>{todo.sno}</h4>
      <p>{todo.title}</p>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}
