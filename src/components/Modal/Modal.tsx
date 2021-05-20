import { FC, useEffect, useRef } from 'react';
import { Container, ModalWrapper, Cross, Header } from '../../styles/Modal/Modal.style';

interface IModal {
  showModal: boolean;
  closeHandler(): void;
  title: string;
}

const Modal: FC<IModal> = ({ showModal, closeHandler, title, children }) => {
  const ModalRef = useRef<HTMLDivElement>(null);

  // modal closes if we click outside the modal
  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      if (e.target === ModalRef.current) {
        closeHandler();
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [closeHandler]);

  // modal closes on pressing Escape
  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    };
    window.addEventListener('keydown', keyPressHandler);
    return () => window.removeEventListener('keydown', keyPressHandler);
  }, [closeHandler]);

  if (!showModal) return null;

  return (
    <Container ref={ModalRef}>
      <ModalWrapper>
        <Header>
          <h3>{title}</h3>
          <Cross onClick={closeHandler} />
        </Header>
        {children}
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
