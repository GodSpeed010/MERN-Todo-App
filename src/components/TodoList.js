import React, { useState, useEffect } from "react";
import axios from '../axios';
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todoState, setTodoState] = useState([]);

    useEffect(() => {
        axios.get('/todo')
            .then(res => setTodoState(res.data))
    }, [])

    return (
        <div>
            {todoState.map(todo => <TodoItem todo={todo} key={todo._id} />)}
        </div>
    )
}