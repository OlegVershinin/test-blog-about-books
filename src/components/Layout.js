import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '/components/Header/index';
import { Footer } from './Footer/index';

const Layout = () => {
    return (
        <div className="page">
            <Header />
            <Outlet style={{ minHeight: '100vh' }} />
            <Footer />
        </div>
    );
};

export { Layout };
