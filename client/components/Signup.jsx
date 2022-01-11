import React, { Component } from 'react';

function SignUp() {

    return(
        <div>
            <h1>Signup</h1>
            <form>
                <label>Name</label>
                <input/>
                <label>Email</label>
                <input type ='email'/>
                <label>Password</label>
                <input type='password'/>
                <button type='submit'>Sign up</button>
            </form>
        </div>

    )
}

export default SignUp;