import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const sginInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const sginOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // for log in profile
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user is ", user);
            setUsers(user)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        users,
        loading,
        createUser,
        sginInUser,
        sginOutUser
    }

    return (
        <AuthContex value={userInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;