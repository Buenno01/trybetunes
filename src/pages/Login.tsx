import React, { useState } from 'react';
import { IoHeadsetSharp } from 'react-icons/io5';
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
    <>
      { !isLoading && ''}
      {
        isLoading
          ? <Loading />
          : (
            <>
              <span
                className="text-sky-400 text-9xl self-center mt-20
                text-center flex flex-col justify-center items-center w-60 h-60
                rounded-full bg-radient-circle-c from-[--sky-opacity-2]
                from-0% to-65%
                "
              >
                <IoHeadsetSharp />
                <span className="text-4xl text-white">
                  TrybeTunes
                </span>
              </span>
              <div
                className="bg-gray-700 shadow-xl w-11/12
                self-center p-8 rounded-xl mt-5 mb-auto"
              >
                <form
                  className="flex flex-col gap-4"
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
                    className="w-1/2 self-center bg-sky-500 font-bold py-2 rounded-lg"
                    data-testid="login-submit-button"
                    disabled={ validation }
                  >
                    Entrar
                  </button>
                </form>
              </div>
              <p className="text-center text-sm text-gray-500">
                Desenvolvido por
                {' '}
                <a>Vinícius Bueno</a>
              </p>
            </>
          )
    }
    </>
  );
}

export default Login;
