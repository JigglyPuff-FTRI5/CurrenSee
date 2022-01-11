import React, { Component } from 'react';
import { emailInputActionCreator, passwordInputActionCreator, loginActionCreator, nameInputActionCreator } from '../actions/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

function Login(){
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const user = {
            email: auth.email,
            password: auth.password
        }
        dispatch(submitLoginActionCreator(user));
        navitage('/dashboard') 
    }
 
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
        </div>
    )
}

export default Login;