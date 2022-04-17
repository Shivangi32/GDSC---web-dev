import React, { useState } from 'react'
import "./addtodo.css"
export default function AddTodo(props) {

    let inputstyle = {
        width: "35vw",
        border: "solid 0.2vw"
    }


    
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault(); //prevent reloading
        if (!title)
            alert("Title can't be blank!!");
        else
        {
            props.addTodo(title);
            setTitle("");
        }

    }
    return (
        <div className='container' align="center">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input style={inputstyle} placeholder="Enter your task" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" aria-describedby="emailHelp" />

                </div>
                <button type="submit" className="btn btn-success" id="add_btn">Add To-Do</button>
            </form>
        </div>
    )
}
