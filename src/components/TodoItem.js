import React from 'react'

export default function TodoItem({ todo }) {
    console.log(`TodoItem: ${JSON.stringify(todo)}`)
    // const [title, description, isCompleted] = todo;

    console.log(JSON.stringify(todo))
    console.log(`todo: ${todo.title}`)

    return (
        <div>
            <div>Title: {todo.title}</div>
            <div>Description: {todo.description}</div>
            <div>Is Completed: {todo.isCompleted.toString()}</div>
        </div>
    )
}