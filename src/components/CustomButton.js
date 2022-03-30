import React from 'react';
import { styled } from '@mui/material/styles';
import '/style/style.scss';

import { Button } from '@mui/material';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#848482',
    color: '#fff',
    borderColor: '#6a6a68',
    '&:hover': {
        backgroundColor: '#f4a460',
        borderColor: '#f08020',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0bda51',
        borderColor: '#00f449',
    },
});

const CustomButton = ({ text, onClick }) => {
    return <BootstrapButton onClick={onClick}>{text}</BootstrapButton>;
};

export { CustomButton };
