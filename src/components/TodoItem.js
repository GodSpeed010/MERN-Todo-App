import React, { useState } from 'react'
import axios from '../axios';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export default function TodoItem({ todo, onDelete, onEdit }) {
    const [checked, setChecked] = useState(todo.isCompleted);

    const handleCheck = () => {
        axios.patch('/todo/' + todo._id, { isCompleted: !checked })
            .then(res => console.log(res.data));

        setChecked(!checked);
    }
    const handleEdit = () => {
        onEdit(todo)
    }
    const handleDelete = () => {
        onDelete(todo)
    }

    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck} />
            </td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
                <IconButton onClick={handleEdit} aria-label="edit" size="small">
                    <Edit fontSize="small" />
                </IconButton>
                |
                <IconButton onClick={handleDelete} aria-label="delete" size="small">
                    <Delete fontSize="small" />
                </IconButton>
            </td>
        </tr>
    )
}