import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
    Paper,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Link,
    Typography,
} from '@mui/material/';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '/components/redux/actions/actions';
import { CustomButton } from '/components/CustomButton';
import { linkState } from '/util/linkState';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#C0C0C0',
    boxShadow: '0px 5px 10px 2px rgba(255, 255, 255, 0.8) inset',
}));

export const BookDetails = () => {
    const { theme, title } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const dispatch = useDispatch();
    const books = useSelector(linkState.getThemesBooksState);
    const book = useSelector(linkState.getThemesBookState);

    useEffect(() => {
        dispatch(actions.createBookDetails({ title, books }));
    }, []);

    return (
        <Container>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '0.1rem',
                    alignItems: 'center',
                }}
            >
                <CustomButton text="Go Back" onClick={goBack}></CustomButton>
            </div>

            <Grid container spacing={3} sx={{ mt: '0.1rem' }}>
                {book.map((el) => (
                    <Grid item xs={5} key={el.book_image}>
                        <Item>
                            <Card
                                sx={{
                                    maxWidth: 330,
                                    height: 453,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={el.book_image}
                                    alt="book"
                                    sx={{
                                        height: 453,
                                    }}
                                />
                            </Card>
                        </Item>
                    </Grid>
                ))}

                {book.map((el) => (
                    <Grid item xs={7} key={el.book_image}>
                        <Item>
                            <Card
                                sx={{
                                    maxWidth: 530,
                                    height: 453,
                                }}
                            >
                                <CardContent
                                    sx={{
                                        backgroundColor: '#000000',
                                        color: '#FFE4E1',
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="div"
                                    >
                                        {el.title}
                                    </Typography>
                                    <Typography variant="h5" color="#FFE4E1">
                                        {el.author}
                                    </Typography>
                                    <hr />
                                    <Typography variant="h6" component="div">
                                        Description:
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        color="#FFE4E1"
                                        component="div"
                                    >
                                        {el.description}
                                    </Typography>
                                    <hr />
                                </CardContent>
                                {el.buy_links.map((el) => (
                                    <CardActions
                                        key={el.name}
                                        sx={{
                                            backgroundColor: '#000000',
                                            color: '#FFE4E1',
                                            padding: 0,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Link
                                            href={el.url}
                                            underline="none"
                                            target="_blank"
                                        >
                                            <Button size="small">
                                                {el.name}
                                            </Button>
                                        </Link>
                                    </CardActions>
                                ))}
                            </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
