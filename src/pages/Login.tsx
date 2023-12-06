import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  function handleSubmit() {

  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setLogin(target.value);
  }

  const validation = login.length > 2;

  return (
    <form onSubmit={ handleSubmit }>
      <input
        onChange={ (e) => { handleChange(e); } }
        type="text"
        data-testid="login-name-input"
        value={ login }
      />
      <button data-testid="login-submit-button" disabled={ !validation }>Entrar</button>
    </form>
  );
}

export default Login;
