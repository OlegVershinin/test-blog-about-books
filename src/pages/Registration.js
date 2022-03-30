import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Typography, Paper, Link } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import { MainContainer } from '../components/MainContainer';
import { Form } from '../components/Form';
import { Input } from '../components/Input';

import { linkState } from '/util/linkState';

import { actions } from '/components/redux/actions/actions';

import { BasicModal } from '../components/Modal/Modal';

export const Registration = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const allLogin = useSelector(linkState.getLoginState);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onBlur',
    });
    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [color, setcolor] = useState('#00FF00');
    const [bg, setBg] = useState('');

    const loginRegistration = (data) => {
        const newLogin = allLogin.some((el) => el.login === data.login);
        const newEmail = allLogin.some((el) => el.email === data.email);

        setOpen(false);
        setText('');
        setcolor('#00FF00');
        setBg('');

        if (!newLogin) {
            if (!newEmail) {
                dispatch(actions.registration(data));
                navigate('/fidback/new', { replace: true });
            } else {
                return (
                    setOpen(true),
                    setText(`${data.email} is already in use!`),
                    setcolor('#FF0000'),
                    setBg(
                        'radial-gradient(circle, rgba(28,36,0,1) 0%, rgba(238,230,9,1) 0%, rgba(255,118,0,1) 100%)'
                    ),
                    setLoading(false),
                    reset()
                );
            }
        } else {
            return (
                setOpen(true),
                setText(`${data.login} is already in use!`),
                setcolor('#FF0000'),
                setBg(
                    'radial-gradient(circle, rgba(28,36,0,1) 0%, rgba(238,230,9,1) 0%, rgba(255,118,0,1) 100%)'
                ),
                setLoading(false),
                reset()
            );
        }
        setLoading(false);
        reset();
    };

    const onSubmit = (data) => {
        setLoading(true);
        reset();
        loginRegistration(data);
    };

    return (
        <>
            <BasicModal condition={open} text={text} color={color} bg={bg} />

            <MainContainer>
                <Link
                    sx={{ pb: '3px', color: '#D8BFD8' }}
                    component="button"
                    variant="inherit"
                    underline="none"
                    onClick={() => {
                        console.info("I'm a button.");
                        navigate('/login', { replace: true });
                    }}
                >
                    Or validation
                </Link>

                <Paper
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        textAlign: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#2F4F4F',
                        padding: '20px 20px 0 20px',
                    }}
                >
                    <Typography component="h2" variant="h5" color="#00FF7F">
                        Registration
                    </Typography>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            autoComplete="off"
                            {...register('login', {
                                required: 'Login is a required field',

                                minLength: {
                                    value: 3,
                                    message: 'at least 3 characters',
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9.?@]+$/,
                                    message:
                                        'Only latin letters and any numbers and @',
                                },
                            })}
                            id="login"
                            label="Login"
                            name="login"
                            helperText={errors?.login?.message}
                        />
                        <Input
                            autoComplete="off"
                            {...register('email', {
                                required: 'E-mail is a required field',
                                minLength: {
                                    value: 6,
                                    message: 'at least 6 characters',
                                },
                                pattern: {
                                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                    message: 'Example: mail@test.com',
                                },
                            })}
                            id="password"
                            type="email"
                            label="E-mail"
                            name="email"
                            helperText={errors?.email?.message}
                        />
                        <Input
                            autoComplete="off"
                            {...register('password', {
                                required: 'Password is a required field',
                                minLength: {
                                    value: 6,
                                    message: 'at least 6 characters',
                                },
                                pattern: {
                                    value: /^[A-Za-z0-9.?@]+$/,
                                    message:
                                        'Only latin letters and any numbers and @',
                                },
                            })}
                            id="password"
                            label="Password"
                            name="password"
                            helperText={errors?.password?.message}
                        />

                        <LoadingButton
                            sx={{
                                backgroundColor: '#696969',
                                color: '#00FF7F',
                            }}
                            type="submit"
                            endIcon={<SendIcon />}
                            loading={loading}
                            loadingPosition="end"
                            variant="contained"
                            fullWidth
                            disabled={!isValid}
                        >
                            Send
                        </LoadingButton>
                    </Form>
                </Paper>
            </MainContainer>
        </>
    );
};
