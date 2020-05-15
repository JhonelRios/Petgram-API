import React, { useContext } from 'react';
import { Context } from '../Context';
import UserForm from '../components/UserForm';

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <UserForm title="Registrarse" onSubmit={activateAuth} />
      <UserForm title="Iniciar Sesión" onSubmit={activateAuth} />
    </>
  );
};

export default NotRegisteredUser;
