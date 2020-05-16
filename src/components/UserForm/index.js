import React from 'react';
import { Title, Form, Input, Button, Error } from './styles';
import { useInputValue } from '../../hooks/useInputValue';

const UserForm = ({ title, onSubmit, disabled, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type="email" placeholder="Email" {...email} />
        <Input disabled={disabled} type="password" placeholder="Password" {...password} />
        <Button disabled={disabled} type="submit">{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
