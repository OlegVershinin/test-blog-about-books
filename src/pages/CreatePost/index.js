import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Stack, Button } from '@mui/material/';
import { FormDialog } from '../../components/Dialog';

import { BasicModal } from '../../components/Modal/Modal';

import { MultipleSelectChip } from '/components/InputBooks';

import { actions } from '/components/redux/actions/actions';

import { linkState } from '/util/linkState';

export const CreatePost = () => {
    const dispatch = useDispatch();
    const themes = useSelector(linkState.getThemesState);
    const books = useSelector(linkState.getBookPost);
    const book = useSelector(linkState.getSelectedBookPost);

    const [themesName, setThemesName] = useState([]);
    const [booksName, setBooksName] = useState([]);

    const [bookName, setBookName] = useState(book);

    const handlerLogOut = () => {
        dispatch(actions.logout());
    };

    useEffect(() => {
        const themesSelected = themes.map((theme) => theme.list_name);
        setThemesName(themesSelected);
    }, []);

    useEffect(() => {
        const booksSelected = books.map((books) => books.title);
        setBooksName(booksSelected);
    }, [books]);

    return (
        <>
            <BasicModal
                condition={true}
                text={'Successfully !'}
                color={'#9400D3'}
                bg={
                    'radial-gradient(circle, rgba(159,203,5,1) 0%, rgba(58,238,9,1) 83%, rgba(13,56,20,1) 100%)'
                }
            />

            <Container sx={{ mt: '1rem', alignItems: 'center' }}>
                <Stack direction="row" spacing={3} mb={4}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#848482' }}
                        onClick={handlerLogOut}
                    >
                        Log out
                    </Button>

                    <FormDialog />

                    <MultipleSelectChip themes={themesName} text="Themes" />

                    {booksName.length > 0 && (
                        <MultipleSelectChip
                            books={booksName}
                            book={bookName}
                            text="Books"
                        />
                    )}
                </Stack>
            </Container>
        </>
    );
};
