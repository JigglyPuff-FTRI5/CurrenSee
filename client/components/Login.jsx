import React, { Component } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { emailInputActionCreator, passwordInputActionCreator, submitLoginActionCreator} from '../actions/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

function Login(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const isLoggedIn = useSelector(state => state.data.isLoggedIn);
    //const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email: data.email,
            password: data.password
        }
        dispatch(submitLoginActionCreator(user));
        // navigate('/dashboard') 
    }

    if (isLoggedIn) {
        return (<Navigate to='/dashboard' />)}
        
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {submit}>
                <label>Email</label>
                <input type='email' placeholder='Enter Email' onChange={(e) => dispatch(emailInputActionCreator(e.target.value))}/>
                <label>Password</label>
                <input type='password' placeholder='Enter Password' onChange={(e) => dispatch(passwordInputActionCreator(e.target.value))}/>
                <button type='submit'>Log in</button>
            </form>
        <div>
            <a href='/user/auth/google'>Authenticate with Google</a>
        </div>
        </div>
    )
}

export default Login;