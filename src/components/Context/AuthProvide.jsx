import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvide = ({ children }) => {
    const userInfo = {
        email: "bhong@chong.com"
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userInfo = {
        createUser
    }
    return (
        <AuthContext value={userInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvide;