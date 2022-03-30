import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '/components/redux/actions/actions';
import { USER_PER_PAGE } from '/util/constans';
import { CustomLoader } from '/components/CustomLoader';
import { CustomPagination } from '/components/CustomPagination';
import { Container, Stack, Typography } from '@mui/material/';
import { linkState } from '/util/linkState';

export const Books = () => {
    const dispatch = useDispatch();

    const posts = useSelector(linkState.getThemesState);

    const loading = useSelector(linkState.getAppLoadingState);
    const selectedPost = useSelector(linkState.getPaginationSelectedPostState);

    const [page, setPage] = useState(
        useSelector((state) => state.pagination.page)
    );

    const totalPages = Math.ceil(posts.length / USER_PER_PAGE);

    useEffect(() => {
        if (!posts.length) {
            dispatch(actions.createTheme());
        }
        dispatch(actions.pagination(posts, page));
    }, [page, posts]);

    if (loading) {
        return (
            <Container>
                <CustomLoader />
            </Container>
        );
    }

    return (
        <Container sx={{ mt: '1rem', textAlign: 'center' }}>
            <Stack spacing={1}>
                <h1 className="books-h2">Get Best Sellers list names</h1>
                <h2 className="books-h2">page: {page}</h2>
                {selectedPost.map((post) => (
                    <Link key={post.list_name} to={`/${post.list_name}`}>
                        <Typography
                            variant="h4"
                            color="#D8BFD8"
                            size="small"
                            textAlign="center"
                        >
                            {post.list_name}
                        </Typography>
                    </Link>
                ))}
            </Stack>{' '}
            <Stack spacing={4} sx={{ alignItems: 'center' }}>
                <CustomPagination
                    sx={{ display: 'inline-block', mt: '2rem' }}
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    showFirstButton
                    showLastButton
                    onChange={(_, num) => setPage(num)}
                    defaultPage={page}
                    size="large"
                />
            </Stack>
        </Container>
    );
};
