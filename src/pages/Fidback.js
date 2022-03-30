import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { CustomLoader } from '/components/CustomLoader';

import { useNavigate, useLocation } from 'react-router-dom';
import {
    Container,
    Stack,
    SnackbarContent,
    Chip,
    Button,
} from '@mui/material/';

import { MenuPopupState } from '/components/MenuPopupState';

import { actions } from '/components/redux/actions/actions';

import { linkState } from '/util/linkState';

import { useAuth } from '../hooks/use-auth';

import { ScrollTop } from '../components/ScrollTop/index';

export const Fidback = () => {
    const dispatch = useDispatch();

    const allFidback = useSelector(linkState.getFidbackState);

    const allBooksState = useSelector(linkState.getBooksState);

    const allUserState = useSelector(linkState.getUsersState);

    const desiredArray = useSelector(linkState.getDesiredArray);

    const allLogin = useSelector(linkState.getLoginState);

    const navigate = useNavigate();

    const { isAuth, login, email, id } = useAuth();

    const handlerAddFidback = async () => {
        if (!isAuth) {
            navigate('/login', { replace: true });
        } else {
            navigate('/fidback/new', { replace: true });
        }
    };

    const handlerAllFidback = () => {
        dispatch(actions.fidbackDesiredArray(allFidback));
    };

    const handlerUniqBooks = (e) => {
        const selectedFidback = allFidback.filter(
            (el) => el.book === e.target.innerText
        );

        dispatch(actions.fidbackDesiredArray(selectedFidback));
    };

    const handlerUniqUsers = (e) => {
        const selectedFidback = allFidback.filter(
            (el) => el.user === e.target.innerText
        );

        dispatch(actions.fidbackDesiredArray(selectedFidback));
    };

    useEffect(() => {
        dispatch(actions.fidback());
    }, []);

    useEffect(() => {
        dispatch(actions.fidbackBooks(allFidback, allBooksState));
        dispatch(actions.fidbackUsers(allFidback, allUserState));
        dispatch(actions.fidbackDesiredArray(allFidback));
        dispatch(actions.login());
    }, [allFidback]);

    if (!desiredArray.length) {
        return (
            <Container>
                <CustomLoader />
            </Container>
        );
    }

    return (
        <Container sx={{ mt: '1rem', alignItems: 'center' }}>
            <Stack direction="row" spacing={1} mb={4}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#848482' }}
                    onClick={handlerAddFidback}
                >
                    Add
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#848482' }}
                    onClick={handlerAllFidback}
                >
                    All
                </Button>

                <MenuPopupState
                    text="Book"
                    onClick={handlerUniqBooks}
                    arr={allBooksState}
                />
                <MenuPopupState
                    text="Author"
                    onClick={handlerUniqUsers}
                    arr={allUserState}
                />
            </Stack>

            {desiredArray.map((el) => (
                <Stack key={uuidv4()}>
                    <Chip
                        sx={{ maxWidth: 400, color: '#00FF00' }}
                        label={`${el.book}, ${el.user}, ${el.data}`}
                    />
                    <SnackbarContent
                        sx={{ mt: 1, mb: 1 }}
                        message={`${el.post}`}
                    />
                </Stack>
            ))}
            <ScrollTop />
        </Container>
    );
};
