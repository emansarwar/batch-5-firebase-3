import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta est voluptas labore fugiat a iure repellendus dolorem, et architecto ducimus ab magni sunt quis enim id expedita ut quod!</p>
    return children;
};


export default RequireAuth;