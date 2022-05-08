import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddEditTodoDialog({ isOpen, handleCancel, handleSubmit, dialogTitle, dialogContent, todoTitleText, todoDescriptionText, onTitleChange, onDescriptionChange }) {
    return (
        <Dialog open={isOpen} onClose={handleCancel}>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>{dialogContent}</DialogContentText>
                <TextField
                    autoFocus
                    value={todoTitleText}
                    onChange={onTitleChange}
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    value={todoDescriptionText}
                    onChange={onDescriptionChange}
                    margin="dense"
                    id="description"
                    label="Description"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}