import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider;
    const handleSignIn = () =>{
        signInWithPopup(auth,provider).then(result=>{
            setUser(result.user);
           
        }).catch(error=>{
            console.log(error)
        })
    }
    const handleSignOut = () => {
        signOut(auth).then(console.log('sign out completed')).catch(error=>console.log(error))
        setUser(null)
    }
    return (
       <>
         <h1 className='flex justify-center'>Login</h1>
        <div className='flex justify-center'>
           
            
            {user ? (  <div>
                        <figure className="flex justify-center items-center gap-2">
            <img
            src={auth.currentUser?.photoURL}
            alt={auth.currentUser?.displayName || "User"}
            className="inline-block size-10 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
            />
            <figcaption>
            <p>{auth.currentUser?.displayName}</p>
            </figcaption>
            <button onClick={handleSignOut} className='btn btn-primary'>Signout</button>
        </figure>
            </div>) : (<> <button onClick={handleSignIn} className='btn btn-secondary'>Sign in</button>
            </>)}
        </div>
        </>
    );
};

export default  Login;