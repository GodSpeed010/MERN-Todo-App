import React, { useState, useEffect } from "react";
import axios from '../../axios';
import TodoItem from "../TodoItem";
import AddEditTodoDialog from "../AddEditTodoDialog";
import './TodoList.css';
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const TodoDialog = {
    add: {
        title: 'Add Todo',
        content: 'Please enter a title and description for the new Task.',
    },
    edit: {
        title: 'Edit Todo',
        content: 'Please edit the title and description below.'
    }
}
const BLANK_TODO = {
    title: '',
    description: '',
    isCompleted: false
}

export default function TodoList() {
    const [state, setState] = useState({
        todos: [],
        isDialogOpen: false,
        dialogType: TodoDialog.add,
        dialogTodo: BLANK_TODO
    });

    useEffect(() => {
        axios.get('/todo')
            .then(res =>
                setState({
                    ...state,
                    todos: res.data
                })
            )
    }, [])

    const deleteTodo = (todo) => {
        axios.delete('/todo/' + todo._id)
            .then(res => {
                console.log(res.data);

                setState({
                    ...state,
                    todos: state.todos.filter(item => item._id !== todo._id)
                })
            }
            );
    }
    const handleAddTodo = (todo) => {
        setState({
            ...state,
            isDialogOpen: true,
            dialogType: TodoDialog.add
        });
    }
    const handleEditTodo = (todo) => {
        setState({
            ...state,
            isDialogOpen: true,
            dialogType: TodoDialog.edit,
            dialogTodo: todo
        });
    }
    const cancelDialog = () => {
        setState({
            ...state,
            isDialogOpen: false,
            dialogTodo: BLANK_TODO
        });
    }
    const submitDialog = () => {
        if (state.dialogType === TodoDialog.add) {
            axios.post('/todo', state.dialogTodo)
                .then(res => {
                    console.log(res.data.msg);
                    console.log(res.data.todo);

                    setState(newState => {
                        return {
                            ...newState,
                            todos: [
                                ...state.todos,
                                res.data.todo
                            ]
                        }
                    });
                });
        } else {
            axios.patch('/todo/' + state.dialogTodo._id, state.dialogTodo)
                .then(res => {
                    console.log(res.data)

                    setState(newState => {
                        return {
                            ...newState,
                            todos: state.todos.map(t => t._id === state.dialogTodo._id ? state.dialogTodo : t)
                        }
                    })
                });

        }

        setState(newState => {
            return {
                ...newState,
                isDialogOpen: false,
                dialogTodo: BLANK_TODO
            }
        })
    }
    const handleTodoTitleChange = (e) => {
        setState({
            ...state,
            dialogTodo: {
                ...state.dialogTodo,
                title: e.target.value
            }
        })
    }
    const handleTodoDescriptionChange = (e) => {
        setState({
            ...state,
            dialogTodo: {
                ...state.dialogTodo,
                description: e.target.value
            }
        })
    }
    return (
        <div>
            <AddEditTodoDialog
                isOpen={state.isDialogOpen}
                handleCancel={cancelDialog}
                handleSubmit={submitDialog}
                dialogTitle={state.dialogType.title}
                dialogContent={state.dialogType.content}
                todoTitleText={state.dialogTodo.title}
                todoDescriptionText={state.dialogTodo.description}
                onTitleChange={handleTodoTitleChange}
                onDescriptionChange={handleTodoDescriptionChange}
            />
            <h3>Todo List</h3>
            <Button onClick={handleAddTodo} sx={{ mb: 2 }} variant="contained" startIcon={<Add />}>Add</Button>
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
                    {state.todos.map(todo => <TodoItem
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={handleEditTodo}
                        key={todo._id} />)}
                </tbody>
            </table>
        </div>
    )
}