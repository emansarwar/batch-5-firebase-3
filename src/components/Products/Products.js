// import React from 'react';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);

    

const Products = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            <h2>Products Information</h2>
            <p>Current user is :{user? user.displayName : 'Nobody'}</p>

        </div>
    );
};

export default Products;