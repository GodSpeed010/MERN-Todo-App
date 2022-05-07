import React, { useState, useEffect } from "react";
import axios from '../../axios';
import TodoItem from "../TodoItem";
import './TodoList.css';

export default function TodoList() {
    const [todoState, setTodoState] = useState([]);

    useEffect(() => {
        axios.get('/todo')
            .then(res => setTodoState(res.data))
    }, [])

    return (
        <div>
            <h3>Todo List</h3>
            <table className="todos-table">
                <thead>
                    <tr>
                        <th>Is Completed</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todoState.map(todo => <TodoItem todo={todo} key={todo._id} />)}
                </tbody>
            </table>

        </div>
    )
}