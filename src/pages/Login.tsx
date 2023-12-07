import { useState } from 'react';
import Loading from '../components/Loading';
import Logo from '../components/Login/Logo';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      { !isLoading && ''}
      {
        isLoading
          ? <Loading />
          : (
            <>
              <Logo />
              <LoginForm setIsLoading={ setIsLoading } />
            </>
          )
    }
    </>
  );
}

export default Login;
