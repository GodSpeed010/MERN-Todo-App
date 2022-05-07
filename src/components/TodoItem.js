import React, { useState } from 'react'
import axios from '../axios';

export default function TodoItem({ todo }) {
    console.log(`TodoItem: ${JSON.stringify(todo)}`)
    const [checked, setChecked] = useState(todo.isCompleted);
    const handleCheck = () => {
        axios.patch('/todo/' + todo._id, { isCompleted: !checked })
            .then(res => console.log(res.data));

        setChecked(!checked);
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
            <td>Edit | Delete</td>
        </tr>
    )
}