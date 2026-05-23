import React, {use} from 'react';
import { AuthContext } from '../components/Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext);
    if(loading){
        return <div><span className="loading loading-spinner loading-xl"></span></div>
    }
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children;
};


export default PrivateRoute;