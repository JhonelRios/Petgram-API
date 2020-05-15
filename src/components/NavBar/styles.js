import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  color: #888;
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &[aria-current] {
    color: #000;

    &:after {
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 35px;
    }
  }
`;
