import React, {use} from 'react';
import { AuthContext } from '../components/Context/AuthContext';

const PrivateRoute = ({children}) => {
    const { user } = use(AuthContext);
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;