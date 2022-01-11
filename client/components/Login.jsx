import React, { Component } from 'react';

function Login(){

    return(
        <div>
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <input type='email'/>
                <label>Password</label>
                <input type='password' />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login;