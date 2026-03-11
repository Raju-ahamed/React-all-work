import React from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {

    const createUser =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const sginInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    onAuthStateChanged(auth,(users)=>{
        if(users){
            console.log("user is ",users)
        }
        else{
            console.log("user is",users)
        }
    })
    const userInfo ={
        createUser,
        sginInUser
    }
    
    return (
        <AuthContex value={userInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;