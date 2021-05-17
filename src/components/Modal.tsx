import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';
import {
  Container,
  Cross,
  Footer,
  Header,
  Main,
  MediaBtn,
  ModalWrapper,
  TextArea,
  UserInfo,
  Photo,
  Video,
  Btn,
} from '../styles/Modal.style';
import Avatar from './Avatar';

interface IModal {
  showModal: boolean;
  closeHandler(): void;
}

const Modal: FC<IModal> = ({ showModal, closeHandler }) => {
  const user = useSelector((state: State) => state.auth.user);
  const [input, setInput] = useState<string>('');
  const ModalContainerRef = useRef<HTMLDivElement>(null);
  const ModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      if (e.target === ModalRef.current) {
        console.log(globalThis);
        closeHandler();
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [closeHandler]);

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
      <ModalWrapper ref={ModalContainerRef}>
        <Header>
          <h3>Create a post</h3>
          <Cross onClick={closeHandler} />
        </Header>
        <Main>
          <UserInfo>
            <Avatar src={user?.photoURL!} />
            <h3>{user?.displayName}</h3>
          </UserInfo>
          <TextArea
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            placeholder="What do you want to talk about?"
          />
        </Main>
        <Footer>
          <div>
            <MediaBtn>
              <Photo />
            </MediaBtn>
            <MediaBtn>
              <Video />
            </MediaBtn>
          </div>
          <Btn disabled={!input}>Post</Btn>
        </Footer>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
