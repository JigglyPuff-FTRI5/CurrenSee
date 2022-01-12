import React, { Component } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { nameInputActionCreator, submitSignupActionCreator, emailInputActionCreator, passwordInputActionCreator } from '../actions/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

function SignUp() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const isLoggedIn = useSelector(state => state.data.isLoggedIn);
    //const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const user = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        dispatch(submitSignupActionCreator(user));
        //navigate('/dashboard')
    }

    if (isLoggedIn) {
        return (<Navigate to='/dashboard' />)}

    return(
        <div>
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <label>Name</label>
                <input type = 'name' placeholder='Enter Name' onChange={(e) => dispatch(nameInputActionCreator(e.target.value))}/>
                <label>Email</label>
                <input type ='email' placeholder='Enter Email' onChange={(e) => dispatch(emailInputActionCreator(e.target.value))}/>
                <label>Password</label>
                <input type='password' placeholder='Enter Password' onChange={(e) => dispatch(passwordInputActionCreator(e.target.value))}/>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp;