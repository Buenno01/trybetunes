import React, { useState } from 'react';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

function Login() {
  const [login, setLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit() {
    setIsLoading(true);
    await createUser({ name: login });
    setIsLoading(false);
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setLogin(target.value);
  }

  const validation = login.length > 2;

  return (
    <div>
      {
    isLoading
      ? <Loading />
      : (
        <form onSubmit={ handleSubmit }>
          <input
            onChange={ (e) => { handleChange(e); } }
            type="text"
            data-testid="login-name-input"
            value={ login }
          />
          <button
            data-testid="login-submit-button"
            disabled={ !validation }
          >
            Entrar
          </button>
        </form>
      )
    }
    </div>
  );
}

export default Login;
