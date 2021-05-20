import {
  Btn,
  FileInput,
  Footer,
  Form,
  MediaBtn,
  Photo,
  TextArea,
  UserInfo,
  Video,
} from '../../styles/Modal/PostModal.style';
import Avatar from '../Avatar';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { State } from '../../state';
import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import db, { storage } from '../../config/firebase';
import firebase from 'firebase';

interface IPostModal {
  closeHandler(): void;
}

const PostModal: FC<IPostModal> = ({ closeHandler }) => {
  const user = useSelector((state: State) => state.auth.user);
  const [input, setInput] = useState<string>('');
  const [media, setMedia] = useState<File | null>(null);
  const [mediaType, setMediaType] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // accepts only images in the file upload
  const photoHandler = () => {
    fileRef.current?.setAttribute('accept', '.jpg,.jpeg,.png');
    setMediaType('image');
    fileRef.current?.click();
  };

  // accepts only videos in the file upload
  const videoHandler = () => {
    fileRef.current?.setAttribute('accept', '.mpeg, .mp4');
    setMediaType('video');
    fileRef.current?.click();
  };

  // Handle the upload photo/video
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      setMedia(e.target.files![0]);
    }
  };

  // upload post on click
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
                userEmail: user?.email,
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
        userEmail: user?.email,
      });
      setInput('');
      closeHandler();
    }
  };
  return (
    <>
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
          {!loading ? (
            <Btn ref={btnRef} disabled={!input} type="submit">
              Post
            </Btn>
          ) : (
            <ClipLoader loading={loading} size={35} color="rgba(0,0,0,0.5)" />
          )}
        </Footer>
      </Form>
    </>
  );
};

export default PostModal;
