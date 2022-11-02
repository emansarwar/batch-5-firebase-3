import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register-all'>
            <h2 className='title-register'>THIS IS REGISTER</h2>
            <form>
                <input className='register-input-field' type="text"  placeholder="Keep your name"></input>
                <br/>
                <input className='register-input-field' type="email" placeholder="Keep your email"></input>
                <br/>
                <input className='register-input-field' type="password" name="" id="" placeholder="Keep your password"></input>
                <br/>
                <input className='register' type="submit" value="REGISTER"></input>
            </form>
        </div>
    );
};

export default Register;