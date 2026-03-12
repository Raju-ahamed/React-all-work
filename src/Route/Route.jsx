import React, { use } from 'react';
import { AuthContex } from '../Component/Context/AuthContex';
import { Navigate } from 'react-router';

const Route = ({children}) => {
    const {users}=use(AuthContex);
    
        if(!users){
            return <Navigate to="/login"></Navigate>
        }
    return children;
};

export default Route;