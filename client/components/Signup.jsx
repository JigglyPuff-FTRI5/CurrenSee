import React, { Component } from 'react';
import { nameInputActionCreator, submitSignupActionCreator } from '../actions/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const user = {
            name: auth.name,
            email: auth.email,
            password: auth.password
        }
        dispatch(submitSignupActionCreator(user));
        navigate('/dashboard') 
    }

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