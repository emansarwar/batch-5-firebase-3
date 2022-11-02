import { getAuth, signOut} from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

import './Header.css';

const auth = getAuth(app);
const Header = () => {
    
    const [user] = useAuthState(auth);
    
    return (
        <div>
            <nav className='header'>
                <Link to="/">HOME</Link>
                <Link to="/products">PRODUCTS</Link>
                <Link to="/orders">ORDERS</Link>
                <Link to="/register">REGISTER</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid 
                    ? 
                    <button onClick={() => signOut(auth)}>Sign Out</button> 
                    :
                    <Link to="/login">LOGIN</Link>
                }
            </nav>

        </div>
    );
};

export default Header;