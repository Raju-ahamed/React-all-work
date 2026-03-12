import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {
    const [users,setUsers]=useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const sginInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const sginOutUser = ()=>{
        return signOut(auth);
    }

    // for log in profile
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user is ", user);
            setUsers(user)
        })
        return ()=>{
            unSubscribe();
        }
    }, [])
    const userInfo = {
        users,
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