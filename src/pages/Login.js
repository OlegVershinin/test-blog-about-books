import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

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

export const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/fidback/new';

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

    const loginValidation = (data) => {
        const user = allLogin.filter((el) => el.email === data.email);
        console.log('USER VALIDATION >', user);
        const [{ login, email, password }] = user.length === 0 ? [{}] : user;
        setOpen(false);
        setText('');
        setcolor('#00FF00');
        setBg('');

        if (email === data.email) {
            if (password === data.password) {
                dispatch(actions.validation(user));
                navigate(fromPage, { replace: true });
            } else {
                return (
                    setOpen(true),
                    setText('Invalid password!!!'),
                    setcolor('#FF0000'),
                    setBg(
                        'radial-gradient(circle, rgba(28,36,0,1) 0%, rgba(238,230,9,1) 0%, rgba(255,118,0,1) 100%)'
                    ),
                    setLoading(false),
                    reset()
                );
            }
        } else {
            console.log('Необходима регистрация!!!');
            navigate('/registration', { replace: true });
        }
        setLoading(false);
        reset();
    };

    const onSubmit = (data) => {
        setLoading(true);
        reset();
        loginValidation(data);
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
                        navigate('/registration', { replace: true });
                    }}
                >
                    Or registration
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
                        Validation
                    </Typography>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            autoComplete="off"
                            {...register('email', {
                                required: 'Email is a required field',
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
                            label="Email"
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
