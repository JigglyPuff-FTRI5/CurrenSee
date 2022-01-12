import React, { Component } from 'react';
import {  Routes, Route} from 'react-router-dom';
import Login from './client/components/Login.jsx';
import Signup from './client/components/Signup.jsx';
import Mainpage from './client/components/Mainpage.jsx';
import Dashboard from './client/containers/Dashboard.jsx';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div>
        <Routes>
          <Route path= '/' element = {<Mainpage/>}></Route>
          <Route path ='/signup' element = {<Signup/>}></Route>
          <Route path ='/login' element = {<Login/>}></Route>
          <Route path ='/dashboard' element = {<Dashboard/>}></Route>
        </Routes>
       </div>
    );
  }
}

export default App;
