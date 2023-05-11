import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.tsx';
import RegisterForm from '../components/RegisterForm.tsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/Login-Register.css'
import { Alert } from '@mui/material';

function LoginRegisterForm() {
    return (
        <div className='LoginRegisterFormContainer'>
            <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify >
                
                <Tab eventKey="home" title="Login">
                    <h3>Login</h3>
                    <LoginForm/>
                </Tab>
                <Tab eventKey="profile" title="Register">
                    <h3>Register</h3>
                    <RegisterForm/>
                </Tab>
            </Tabs>
        </div>
  );
}

export default  LoginRegisterForm;