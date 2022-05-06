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

    const newTodo = new Todo({ title, description });

    newTodo.save()
        .then(() => res.json('Todo added!'))
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

module.exports = router;