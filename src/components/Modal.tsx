import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import db, { storage } from '../config/firebase';
import firebase from 'firebase';
import { State } from '../state';
import {
  Container,
  Cross,
  Footer,
  Header,
  Form,
  MediaBtn,
  ModalWrapper,
  TextArea,
  UserInfo,
  Photo,
  Video,
  Btn,
  FileInput,
} from '../styles/Modal.style';
import Avatar from './Avatar';

interface IModal {
  showModal: boolean;
  closeHandler(): void;
}

const Modal: FC<IModal> = ({ showModal, closeHandler }) => {
  const user = useSelector((state: State) => state.auth.user);
  const [input, setInput] = useState<string>('');
  const [media, setMedia] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const ModalRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

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

  const photoHandler = () => {
    fileRef.current?.setAttribute('accept', '.jpg,.jpeg,.png');
    setMediaType('image');
    fileRef.current?.click();
  };
  const videoHandler = () => {
    fileRef.current?.setAttribute('accept', '.mpeg, .mp4');
    setMediaType('video');
    fileRef.current?.click();
  };
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setMedia(e.target.files![0]);
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (media) {
      const uploadTask = storage.ref(`media/${media?.name}`).put(media);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setLoading(true);
          // next function - in progress
        },
        (err) => {
          // If error in uploading
          alert(err.message);
        },
        () => {
          // upload Completed
          storage
            .ref('media')
            .child(media?.name)
            .getDownloadURL()
            .then((url) => {
              db.collection('posts').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                postDescription: input,
                media: url,
                mediaType: mediaType,
                username: user?.displayName,
                profilePic: user?.photoURL,
              });
            });
          setLoading(false);
          setMedia(null);
          setMediaType('');
          setInput('');
          closeHandler();
        }
      );
    } else {
      db.collection('posts').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        postDescription: input,
        username: user?.displayName,
        profilePic: user?.photoURL,
      });
      setInput('');
      closeHandler();
    }
  };

  if (!showModal) return null;

  return (
    <Container ref={ModalRef}>
      <ModalWrapper>
        <Header>
          <h3>Create a post</h3>
          <Cross onClick={closeHandler} />
        </Header>
        <Form onSubmit={submitHandler}>
          <UserInfo>
            <Avatar src={user?.photoURL!} />
            <h3>{user?.displayName}</h3>
          </UserInfo>
          <TextArea
            autoFocus
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
            placeholder="What do you want to talk about?"
          />
          <p>{media && media?.name}</p>
          <Footer>
            <div>
              <FileInput ref={fileRef} type="file" accept="" onChange={fileHandler} />
              <MediaBtn onClick={photoHandler}>
                <Photo />
              </MediaBtn>
              <MediaBtn onClick={videoHandler}>
                <Video />
              </MediaBtn>
            </div>
            {!loading && (
              <Btn ref={btnRef} disabled={!input} type="submit">
                Post
              </Btn>
            )}
          </Footer>
        </Form>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
