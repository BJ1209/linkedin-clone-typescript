import styled from 'styled-components';
import { Card } from '../HomeStyles/Sidebar.style';
import { ReactComponent as CloseIcon } from '../../assets/logo/close.svg';

const Container = styled.div`
  margin-top: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  animation: fadeIn 150ms ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  width: clamp(450px, 35%, 600px);
  height: clamp(350px, 60%, 700px);
`;

const Header = styled.header`
  padding: 1em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const Cross = styled(CloseIcon)`
  object-fit: contain;
  width: 1em;
  height: 1em;
  cursor: pointer;
  fill: rgba(0, 0, 0, 0.6);
`;

export { ModalWrapper, Container, Header, Cross };
