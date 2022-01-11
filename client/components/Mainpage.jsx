import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function Mainpage(){

    return(
        <div className='mainpage'>
            <h1 className = 'title'>Curren$ee</h1>
            <Link to='/login'>
            <button>Login</button>
            </Link>
            <Link to='/signup'>
            <button>Sign Up</button>
            </Link>
        </div>
    )
}

export default Mainpage;