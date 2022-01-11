import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './client/components/Login.jsx'
import Signup from './client/components/Signup.jsx'
import Mainpage from './client/components/Mainpage.jsx'
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div>
       <Router>
        <Routes>
          <Route path= '/' element = {<Mainpage/>}></Route>
          <Route path ='/signup' element = {<Signup/>}></Route>
          <Route path ='/login' element = {<Login/>}></Route>
        </Routes>
       </Router>
       </div>
    );
  }
}

export default App;
