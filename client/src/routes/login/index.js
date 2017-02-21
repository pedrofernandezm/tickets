import React from 'react';
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer.js';

export default function LoginPage({ login }){

  return(
    <div className="login-page">
      <div className="login-box">
        <h2>Sign in</h2>
        <LoginFormContainer onSubmitForm={ login }/>
      </div>
    </div>
  );

}
