import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  display: inline-block;
  width: 31.33%;
  margin: 1%;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const Grid = styled.div`
  padding-top: 32px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;
