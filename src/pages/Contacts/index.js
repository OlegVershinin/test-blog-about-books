import React from 'react';
import classes from './Contacts.module.scss';
import { SvgSelector } from '/components/SvgSelector';
import { Container, Stack } from '@mui/material/';

export const Contacts = () => {
    return (
        <Container sx={{ mt: '1rem', textAlign: 'center' }}>
            <Stack>
                <div className={classes.p}>
                    Hello, I'm from Ukraine!
                    <span>Oleg Vershinin</span>
                    &mdash; German precision and Swiss quality;
                    <ul>
                        <li>
                            <a href="#">
                                <i>
                                    <SvgSelector id="OC_1" />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="skype:[live:arkadio_7]?chat">
                                <i>
                                    <SvgSelector id="OC_2" />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i>
                                    <SvgSelector id="OC_3" />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i>
                                    <SvgSelector id="OC_4" />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:marjag12@gmail.com">
                                <i>
                                    <SvgSelector id="Mail" />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+380504350055">
                                <i>
                                    <SvgSelector id="Phone" />
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </Stack>
        </Container>
    );
};
