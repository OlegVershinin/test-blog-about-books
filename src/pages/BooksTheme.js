import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../components/redux/actions/actions';

import { USER_PER_PAGE_BT } from '../util/constans';

import { styled } from '@mui/material/styles';
import {
    Container,
    Grid,
    Paper,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Stack,
} from '@mui/material/';
import { CustomPagination } from '/components/CustomPagination';
import { CustomButton } from '/components/CustomButton';
import { CustomLoader } from '/components/CustomLoader';
import { linkState } from '/util/linkState';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#C0C0C0',
    boxShadow: '0px 5px 10px 2px rgba(255, 255, 255, 0.8) inset',
}));

export const BooksTheme = () => {
    const { theme } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const dispatch = useDispatch();
    const posts = useSelector(linkState.getThemesBooksState);
    const oldTheme = useSelector(linkState.getPaginationOldThemeState);
    const loading = useSelector(linkState.getAppLoadingState);
    const selectedPost = useSelector(
        linkState.getPaginationSelectedPostBooksState
    );

    const totalPages = Math.ceil(posts.length / USER_PER_PAGE_BT);

    const [page, setPage] = useState(
        useSelector(linkState.getPaginationPageBooksState)
    );

    useEffect(() => {
        if (!posts.length || oldTheme !== theme) {
            setPage(1);
            dispatch(actions.createThemeBooks({ theme }));
        }
        dispatch(actions.paginationBooks(posts, page, theme));
    }, [page, posts]);

    if (loading) {
        return (
            <Container>
                <CustomLoader />
            </Container>
        );
    }

    return (
        <Container>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '0.3rem',
                    alignItems: 'center',
                }}
            >
                <h3 className="books-h2">
                    Besselers on the topic {theme} - page:{page}
                </h3>
                <CustomButton text="Go Back" onClick={goBack}></CustomButton>
            </div>

            <Grid container spacing={3} sx={{ mt: '0.1rem' }}>
                {selectedPost.map((post) => (
                    <Grid item xs={4} key={post.rank}>
                        <Item key={post.rank}>
                            <Link key={post.rank} to={`${post.title}`}>
                                <Card
                                    sx={{
                                        maxWidth: 300,
                                        height: 400,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={post.book_image}
                                        alt="book"
                                        sx={{
                                            height: 290,
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                        >
                                            {post.author}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {post.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Item>
                    </Grid>
                ))}
            </Grid>
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
