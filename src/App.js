import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '/pages/Home/index';
import { Books } from '/pages/Books';
import { Fidback } from '/pages/Fidback';
import { Contacts } from '/pages/Contacts/index';
import { Notfound } from '/pages/Notfound';
import { BooksTheme } from '/pages/BooksTheme';
import { BookDetails } from '/pages/BookDetails';
import { Layout } from '/components/Layout';
import { CreatePost } from '/pages/CreatePost';
import { Login } from '/pages/Login';
import { Registration } from '/pages/Registration';

import { RequireAuth } from '/hok/RequireAuth';

import '/style/style.scss';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Books />} />
                    <Route path="home" element={<Home />} />
                    <Route path="fidback" element={<Fidback />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="/:theme" element={<BooksTheme />} />
                    <Route path="/:theme/:title" element={<BookDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />

                    <Route
                        path="fidback/new"
                        element={
                            <RequireAuth>
                                <CreatePost />
                            </RequireAuth>
                        }
                    />

                    <Route path="*" element={<Notfound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
