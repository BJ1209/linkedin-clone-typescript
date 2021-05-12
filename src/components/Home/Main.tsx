import { FC } from 'react';
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

const Main: FC = () => {
  return (
    <Container>
      <SharePost>
        <div>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQGMgLni0Z8rQg/profile-displayphoto-shrink_100_100/0/1620544555804?e=1626307200&v=beta&t=nEtprJ8rJQUfSuVXaRoM29tf6t0ajZH2_J63WnJ9x7o"
            alt="profile picture"
            style={{ marginRight: 10 }}
          />
          <PostBtnTop>Start a post</PostBtnTop>
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
    </Container>
  );
};

export default Main;
