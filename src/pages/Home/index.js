import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Typography, Container, Stack } from '@mui/material/';
import checkmark from '/util/img/checkmarkcircleoutline_110695.svg';
import nyt from '/util/img/the-new-york-times-1.svg';
import classes from './Home.module.scss';

export const Home = () => {
    const navigate = useNavigate();
    const book = () => navigate('/');
    const fidback = () => navigate('/fidback');

    return (
        <Container sx={{ mt: '1rem', textAlign: 'center' }}>
            <Stack direction="column" spacing={4}>
                <Typography variant="h3">
                    This site uses the Books New York Times public API
                </Typography>

                <Link
                    href="https://developer.nytimes.com"
                    underline="none"
                    target="blank"
                >
                    {/* <img src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344"></img> */}
                    <img src={nyt} width="400px"></img>
                </Link>
                <Link
                    component="button"
                    variant="h4"
                    onClick={book}
                    underline="hover"
                    color="#C0C0C0"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={checkmark}
                        width="35px"
                        height="45px"
                        style={{ marginRight: '7px' }}
                    ></img>
                    <div className={classes.typing_one}>
                        Get up-to-date information about bestselling books on
                        various topics.
                    </div>
                </Link>
                <Link
                    component="button"
                    variant="h4"
                    onClick={fidback}
                    underline="hover"
                    color="#C0C0C0"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={checkmark}
                        width="35px"
                        height="45px"
                        style={{ marginRight: '7px' }}
                    ></img>
                    <div className={classes.typing_two}>
                        Share your impressions and find out the opinions of
                        other readers.
                    </div>
                </Link>
                <Link
                    href="https://www.nytimes.com/section/books/review"
                    variant="h4"
                    underline="hover"
                    target="blank"
                    color="#C0C0C0"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={checkmark}
                        width="35px"
                        height="45px"
                        style={{ marginRight: '7px' }}
                    ></img>
                    <div className={classes.typing_three}>
                        Read book reviews on the source website.
                    </div>
                </Link>
                <Link
                    href="https://www.nytimes.com"
                    variant="h4"
                    underline="hover"
                    target="blank"
                    color="#C0C0C0"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src={checkmark}
                        width="35px"
                        height="45px"
                        style={{ marginRight: '7px' }}
                    ></img>
                    <div className={classes.typing_four}>
                        Stay up to date with all the news, keep up with the
                        times.
                    </div>
                </Link>
            </Stack>
        </Container>
    );
};
