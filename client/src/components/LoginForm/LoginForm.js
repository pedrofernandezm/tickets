import React from 'react';

export default function LoginForm({ onSubmitForm, onInputChange, emailInputValue, passwordInputValue }) {
  return(
    <form action="" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="emailInputValue" onChange={onInputChange} value={emailInputValue} id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="passwordInputValue" onChange={onInputChange} value={passwordInputValue} id="password" type="password" />
      </div>
      <button>Sign in</button>
    </form>
  );

  function onSubmitHandler(event){
    event.preventDefault();
    onSubmitForm(emailInputValue, passwordInputValue);
  }
}
