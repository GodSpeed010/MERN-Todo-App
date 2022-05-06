const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        isCompleted: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;