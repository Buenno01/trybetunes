import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

function Login() {
  const [login, setLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await createUser({ name: login });
    setIsLoading(false);
    navigate('/search');
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setLogin(target.value);
  }

  const validation = login.length < 3;

  return (
    <div>
      {
    isLoading
      ? <Loading />
      : (
        <form onSubmit={ (e) => { handleSubmit(e); } }>
          <input
            onChange={ (e) => { handleChange(e); } }
            type="text"
            data-testid="login-name-input"
            value={ login }
          />
          <button
            data-testid="login-submit-button"
            disabled={ validation }
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
