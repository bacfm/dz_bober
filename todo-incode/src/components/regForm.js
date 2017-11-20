import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';



export default class RegForm extends Component {
    render(){
        console.log(window.location.pathname);
        // if((window.location.pathname !== '/login') || (window.location.pathname !== '/signup')){
        //     return (<Redirect to="/signup" />)
        // } else {
             return(
                <div>
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
                </div>
            );
        }
    }
