import React from 'react';
import { Title, Form, Input, Button } from './styles';
import { useInputValue } from '../../hooks/useInputValue';

const UserForm = ({ title, onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};

export default UserForm;
