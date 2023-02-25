import React, { useEffect, useState } from "react";

export default function Todo(){

    const [search, SetSearch] = useState('');
    const [todos, SetTodos] = useState([]);

    const searchFunction = (value) => {
        console.log(value);
    }

    useEffect(()=>{
        SetTodos(['todo1','todo2','todo3'].filter(i=> i.includes(search)))
    },[search])

    return(
        <main id='main' className="test">
        <label htmlFor="search" onClick={searchFunction}>Arama</label>
        <input type="text" id="search" onChange = {e => SetSearch(e.target.value)}/>
        <ul>
            {
                todos.map(todo => 
                    <li key={todo}>
                        {todo}
                    </li>
                )
            }
        </ul>
        </main>
    )
}