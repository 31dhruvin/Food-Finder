import React, { useContext,useState } from 'react';
import {BrowserRouter as Router, Link,Switch,Route, useHistory, Redirect} from 'react-router-dom'
import Main from './Main'
import Contact from "./Contact"
import About from "./About"
import User from './users';
import Login from './Login'
import Pizza from './Pizza'
import Vadapav from './Vadapav'
import SignUp from './SignUp';
import Reset from './Reset'
import UserStore from "../Store";
import Add from "./Add"
import Card from './card'
import Welcome from './Welcome'
import Footer from './Footer'
import Search from './Search'
import Surat from './Surat'
import Locho from './Locho'
import Bateti from './Bateti'
import Sweets from './Sweets'

import {fire} from '../Firebase'
const Navbar=(props) => {
  const history = useHistory()
  const datas=props.datas
  const { userData, setUserData } = useContext(UserStore);useState({
    auth:false,
  });
  const Logout = () =>{
    fire.auth().signOut().then(() => {
      setUserData({
        ...userData,
        auth:false,
        data:null,
      })
    }).catch((error) => {
      console.log(error.message)
    });
  }
    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand" style={{fontSize:"30px"}}><strong>Food Finder</strong></div>
          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                userData.auth ? (
                  <li className="nav-item ml-4">
                <Link className="nav-link " aria-current="page" to="/home" style={{fontSize:"20px"}}><strong>Home</strong></Link>
              </li>
                )
                :(
                  <span></span>
                )
              }
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                userData.auth ? (
                  <li className="nav-item">
                  <Link className="nav-link" to="/contact"style={{fontSize:"20px"}}>
                  <strong>Contact</strong>
                  </Link>
                </li>
                )
                :(
                  <span></span>
                )
              }
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                userData.auth ?(
                  <li className="nav-item">
                <Link className="nav-link" to="/searchitems"style={{fontSize:"20px"}}>
                <strong>Search</strong>
                </Link>
              </li>
                )
                :(
                  <span></span>
                )
              }
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                userData.auth ? (
                  <li className="nav-item">
                <Link onClick={Logout} className="nav-link" to="/login"style={{fontSize:"20px"}}>
                <strong>Logout</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              };
               <li className="nav-item">
                <Link className="nav-link" to="/pizza"style={{fontSize:"25px",display:"none"}}>
                <strong>Pizza</strong>
                </Link>
                <Link className="nav-link" to="/login"style={{fontSize:"25px",display:"none"}}>
                <strong>Login</strong>
                </Link>
                <Link className="nav-link" to="/"style={{fontSize:"25px",display:"none"}}>
                <strong>SignUp</strong>
                </Link>
              </li>     
            </ul>           
          </div>
        </div>
      </nav>
      <Switch>
      
      <Route exact path="/home">
          {
            userData.auth ? <Main /> : <Redirect to="/"></Redirect>
          }
      </Route>
      
        <Route exact path="/contact">
          {userData.auth ? <Contact /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route exact path="/locho" component={Locho}>
        {
            userData.auth ? <Locho /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/surat" component={Surat}>
        {
            userData.auth ? <Surat /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/pizza" component={Pizza}>
        {
            userData.auth ? <Pizza /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/sandwich" component={Card}>
        {
            userData.auth ? <Card /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/paavbhaji" component={User}>
        {
            userData.auth ? <User /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/southindian" component={Welcome}>
        {
            userData.auth ? <Welcome/> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/chinese" component={Footer}>
        {
            userData.auth ? <Footer /> : <Redirect to="/"></Redirect>
          }</Route> 
        <Route exact path="/vadapav" component={Vadapav}>
        {
            userData.auth ? <Vadapav /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/chaat" component={About}>
        {
            userData.auth ? <About /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/bateti" component={Bateti}>
        {
            userData.auth ? <Bateti /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/sweets" component={Sweets}>
        {
            userData.auth ? <Sweets /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/addrestaurants" component={Add}>
        {
            userData.auth ? <Add /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/searchitems">
          {
            userData.auth ? <Search /> : <Redirect to="/"></Redirect>
          }
        </Route>
        <Route exact path="/login">
              {userData.auth ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route exact path="/">
              {userData.auth ? <Redirect to="/home" /> : <SignUp />}
            </Route>
            <Route exact path="/reset">
              {userData.auth ? <Redirect to="/home" /> : <Reset />}
            </Route>
            
      </Switch>
           </Router>
    )
}
export default Navbar;
