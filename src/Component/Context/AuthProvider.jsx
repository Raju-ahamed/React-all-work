import React from 'react';
import { AuthContex } from './AuthContex';


const AuthProvider = ({ children }) => {

    const userInfo ={
        email:"raju@joy.com"
    }
    
    return (
        <AuthContex value={userInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;