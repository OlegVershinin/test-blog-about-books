import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { linkState } from '/util/linkState';

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useSelector(linkState.getUserValidallLoginState);

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};
