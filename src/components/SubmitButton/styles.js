import styled from 'styled-components';

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  margin: 0 auto;
  display: block;
  width: 80%;
  text-align: center;
  cursor: pointer;

  &[disabled] {
    opacity: 0.3;
  }
`;
