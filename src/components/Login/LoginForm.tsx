import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';

type LoginFormProps = {
  setIsLoading: Dispatch<SetStateAction<boolean>>
};

function LoginForm({ setIsLoading }: LoginFormProps) {
  const [login, setLogin] = useState('');
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
    <form
      className="flex flex-col gap-4 bg-gray-700 shadow-xl w-11/12
      self-center p-8 rounded-xl mt-5 mb-auto"
      onSubmit={ (e) => { handleSubmit(e); } }
    >
      <input
        className="py-2 px-3 bg-gray-100 border-gray-400 border text-gray-950"
        placeholder="Nome de Usuário"
        onChange={ (e) => { handleChange(e); } }
        type="text"
        data-testid="login-name-input"
        value={ login }
      />
      <button
        className="w-1/2 self-center bg-sky-500 font-bold py-2
                    rounded-lg text-white"
        data-testid="login-submit-button"
        disabled={ validation }
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;
