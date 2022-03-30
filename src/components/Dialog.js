import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm } from 'react-hook-form';

import { db } from '../firebase';
import { ref, set } from 'firebase/database';

import { linkState } from '/util/linkState';

import { useSelector } from 'react-redux';

import { useAuth } from '../hooks/use-auth';

export function FormDialog() {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const date = new Date().toLocaleDateString();
    const newId = Date.parse(new Date());
    const fidbackRef = ref(db, `fidback/${newId}`);

    const currentUser = useSelector(linkState.getUseAuth);

    const postBook = useSelector(linkState.getSelectedBookPost);

    const { login, email } = useAuth();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onSubmit = async (data) => {
        const { fidback } = data;

        const password = '123eee';
        await set(fidbackRef, {
            book: postBook.join(),
            data: date,
            post: fidback,
            user: login,
            email: email,
            password: password,
        });

        setOpen(false);
        reset();
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{ backgroundColor: '#848482' }}
                onClick={handleClickOpen}
            >
                Add a review
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fidback</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        offensive and profanity is unacceptable and will be
                        removed !!!
                    </DialogContentText>
                    <TextField
                        {...register('fidback', {
                            required: 'Fidback is a required field',

                            minLength: {
                                value: 10,
                                message: 'at least 10 characters',
                            },
                        })}
                        autoFocus
                        margin="dense"
                        id="fidback"
                        label="Fidback"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        minRows={5}
                        name="fidback"
                        helperText="at least 10 characters"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit(onSubmit)}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
