import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Context } from '../Context';
import UserForm from '../components/UserForm';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  // Register
  const [register, registerInfo] = useMutation(REGISTER);

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    register({ variables: { input } }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const registerError = registerInfo.error && 'El usuario ya se encuentra registrado';

  // Login
  const [login, loginInfo] = useMutation(LOGIN);

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    login({ variables: { input } }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const loginError = loginInfo.error && 'Usuario o contraseña incorrectos';

  return (
    <>
      <UserForm
        title="Registrarse"
        onSubmit={onSubmitRegister}
        disabled={registerInfo.loading}
        error={registerError}
      />
      <UserForm
        title="Iniciar Sesión"
        onSubmit={onSubmitLogin}
        disabled={loginInfo.loading}
        error={loginError}
      />
    </>
  );
};

export default NotRegisteredUser;
