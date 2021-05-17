import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../state';
import {
  Container,
  SharePost,
  PostBtn,
  PostBtnTop,
  Photo,
  Video,
  Event,
  Article,
} from '../../styles/HomeStyles/Main.style';
import Avatar from '../Avatar';
import Modal from '../Modal';
import Post from './Post';

const Main: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const user = useSelector((state: State) => state.auth.user);

  const openModal = () => setShowModal(true);

  return (
    <Container>
      <SharePost>
        <div>
          <Avatar src={user?.photoURL!} alt="profile picture" style={{ marginRight: 10 }} />
          <PostBtnTop onClick={openModal}>Start a post</PostBtnTop>
        </div>
        <div>
          <PostBtn>
            <Photo />
            <span>Photo</span>
          </PostBtn>
          <PostBtn>
            <Video />
            <span>Video</span>
          </PostBtn>
          <PostBtn>
            <Event />
            <span>Event</span>
          </PostBtn>
          <PostBtn>
            <Article />
            <span>Write Article</span>
          </PostBtn>
        </div>
      </SharePost>
      <Post />
      <Modal showModal={showModal} closeHandler={() => setShowModal(false)} />
    </Container>
  );
};

export default Main;
