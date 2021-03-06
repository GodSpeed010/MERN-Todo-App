const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const isCompleted = req.body.isCompleted;

    const newTodo = new Todo({ title, description, isCompleted });

    newTodo.save()
        .then(todo => res.json({msg: 'Todo added!', todo: todo}))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    const todoId = req.params.id;

    Todo.findByIdAndDelete(todoId)
        .then(() => res.json('Todo deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    const todoId = req.params.id;

    Todo.findById(todoId)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').patch((req, res) => {
    const todoId = req.params.id;

    Todo.findByIdAndUpdate(todoId, req.body)
        .then(() => res.json('Todo updated.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;