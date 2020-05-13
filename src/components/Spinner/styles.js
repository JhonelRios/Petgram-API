import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const Div1 = styled.div`
  width: 200px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
`;

export const Div2 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const Div3 = styled.div`
  position: absolute;
  animation: 1s ${loading} linear infinite;
  width: 52px;
  height: 52px;
  left: 74px;
  border-radius: 50%;
  box-shadow: 0 2px 0 0 #c61feb;
  transform-origin: 26px 27px;
  box-sizing: content-box;
`;
