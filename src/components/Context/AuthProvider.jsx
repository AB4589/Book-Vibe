import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const userInfo = {
    //     email: "bhong@chong.com"
    // }    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
          return signOut(auth).then(console.log('sign out completed')).catch(error=>console.log("Something is wrong",error) )
      }
    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log('has current user',currentUser)
    //     }
    //     else{
    //         console.log('current user',currentUser)
    //     }
    // }) 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside use effect', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    },[])
    const userInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext value={userInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;