import React from 'react';
import { Title, Form, Input, Error } from './styles';
import { useInputValue } from '../../hooks/useInputValue';
import SubmitButton from '../SubmitButton';

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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default UserForm;
