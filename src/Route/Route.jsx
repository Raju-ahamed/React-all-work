import React, { use } from 'react';
import { AuthContex } from '../Component/Context/AuthContex';
import { Navigate } from 'react-router';

const Route = ({ children }) => {
    const { users, loading } = use(AuthContex);
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if (!users) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default Route;