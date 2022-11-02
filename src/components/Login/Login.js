import React from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../firebase.init'
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
    
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'; 
const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(() =>{
        navigate(from, {replace: true})
    })
}
    return (
        <div>
            <h2 className='login-title'>Please Login</h2>
                
            <div style={{margin: '20px'}}>
            <button className='googlesign' onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                {/* <input type="text"  placeholder="Keep your name"></input>
                <br/> */}
                <input className='login-input-field' type="email" placeholder="Keep your email"></input>
                <br/>
                <input className='login-input-field' type="password" name="" id="" placeholder="Keep your password"></input>
                <br/>
                <input className='login' type="submit" value="LOGIN"></input>
            </form>
        </div>
    );
};

export default Login;