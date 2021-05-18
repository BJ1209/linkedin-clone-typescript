import { FC } from 'react';
import { PostBtn } from '../../styles/HomeStyles/Main.style';
import {
  Comment,
  Like,
  More,
  PostBottom,
  PostContainer,
  PostDescription,
  PostImage,
  PostTop,
  Reactions,
} from '../../styles/HomeStyles/Post.style';
import Avatar from '../Avatar';
import firebase from 'firebase';
export interface IPostProps {
  id: string;
  data: firebase.firestore.DocumentData;
}

const Post: FC<IPostProps> = ({ id, data }) => {
  return (
    <PostContainer>
      <PostTop>
        <Avatar
          src={data.profilePic}
          style={{ height: 50, width: 50 }}
          alt="User picture"
          draggable={false}
        />
        <div>
          <h4>{data.username}</h4>
          <p>org</p>
          <p>2 days ago</p>
        </div>
        <span>
          <More />
        </span>
      </PostTop>
      <PostDescription>{data.postDescription}</PostDescription>
      {data.media &&
        (data.mediaType === 'image' ? (
          <PostImage src={data.media} alt="post" />
        ) : data.mediaType === 'video' ? (
          <video width="100%" controls>
            <source src={data.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null)}
      <PostBottom>
        <Reactions>
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt="like"
            draggable={false}
          />
          <span>3</span>
          <span>·</span>
          <p>3 comments</p>
        </Reactions>
        <div>
          <PostBtn>
            <Like />
            <span>Link</span>
          </PostBtn>
          <PostBtn>
            <Comment />
            <span>Comment</span>
          </PostBtn>
        </div>
      </PostBottom>
    </PostContainer>
  );
};

export default Post;
