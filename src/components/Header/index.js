import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

import { CustomButton } from '/components/CustomButton';

export function Header() {
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    <div className={classes.typing_demo}> Blog about books</div>
                </Typography>
                <Stack direction="row" spacing={5}>
                    <NavLink to="/home" style={{ textDecoration: 'none' }}>
                        <CustomButton text="Home"></CustomButton>
                    </NavLink>
                    <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
                        <CustomButton text="Contacts"></CustomButton>
                    </NavLink>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <CustomButton text="Books"></CustomButton>
                    </NavLink>
                    <NavLink to="/fidback" style={{ textDecoration: 'none' }}>
                        <CustomButton text="Fidback"></CustomButton>
                    </NavLink>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
