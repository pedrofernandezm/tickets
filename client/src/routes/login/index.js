import React from 'react';
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer.js';

export default function LoginPage({ login }){

  return(
    <div>
      <h1>Sign in</h1>
      <LoginFormContainer onSubmitForm={ login }/>
    </div>
  );

}
