import styled from 'styled-components';

export const SpinContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  transform: scale(3);
`;
