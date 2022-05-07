import React, { useState, useEffect } from "react";
import axios from '../../axios';
import TodoItem from "../TodoItem";
import './TodoList.css';
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
export default function TodoList() {
    const [todoState, setTodoState] = useState([]);
    
    //todo refactor to use this state
    const [state, setState] = useState({
        todos: [],
        isDialogOpen: false,
    })

    useEffect(() => {
        axios.get('/todo')
            .then(res => setTodoState(res.data))
    }, [])

    const deleteTodo = (todo) => {
        axios.delete('/todo/' + todo._id)
            .then(res => {
                console.log(res.data)

                setTodoState(todoState.filter(item => item._id !== todo._id))
            });
    }
    const editTodo = (todo) => {
        //todo Open dialog for editing Todo
    }

    return (
        <div>
            <h3>Todo List</h3>
            <Button sx={{ mb: 2 }} variant="contained" startIcon={<Add />}>Add</Button>
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
                    {todoState.map(todo => <TodoItem
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                        key={todo._id} />)}
                </tbody>
            </table>
        </div>
    )
}