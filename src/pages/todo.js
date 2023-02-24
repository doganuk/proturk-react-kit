import React from "react";

export default function Todo(){

    const todos =['todo1','todo2','todo3']

    return(
        <ul>
            {
                todos.map(todo => 
                    <li key={todo}>
                        {todo}
                    </li>
                )
            }
        </ul>
    )
}