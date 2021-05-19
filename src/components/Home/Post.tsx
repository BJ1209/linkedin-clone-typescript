import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { PostBtn } from '../../styles/HomeStyles/Main.style';
import {
  CommentLogo,
  Like,
  Trash,
  PostBottom,
  PostContainer,
  PostDescription,
  PostImage,
  PostTop,
  Reactions,
  CommentForm,
  Comments,
} from '../../styles/HomeStyles/Post.style';
import Avatar from '../Avatar';
import firebase from 'firebase';
import moment from 'moment';
import db from '../../config/firebase';
import Comment from '../Comment';
import { useSelector } from 'react-redux';
import { State } from '../../state';
import { IFirebaseData } from '../../interfaces';
export interface IPostProps {
  id: string;
  data: firebase.firestore.DocumentData;
}

const Post: FC<IPostProps> = ({ id, data }) => {
  const user = useSelector((state: State) => state.auth.user);
  const [comments, setComments] = useState<IFirebaseData[]>([]);
  const [input, setInput] = useState<string>('');
  const commentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    db.collection('posts')
      .doc(id)
      .collection('comments')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [id]);

  const deletePost = () => {
    db.collection('posts')
      .doc(id)
      .delete()
      .then(() => console.log('post deleted'))
      .catch((err) => alert(err.message));
  };

  const submitComment = (e: FormEvent) => {
    e.preventDefault();
    db.collection('posts').doc(id).collection('comments').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      comment: input,
      username: user?.displayName,
      profilePic: user?.photoURL,
      userEmail: user?.email,
    });
    setInput('');
  };

  const Media =
    data?.media &&
    (data?.mediaType === 'image' ? (
      <PostImage src={data?.media} alt="post" />
    ) : data?.mediaType === 'video' ? (
      <video width="100%" controls>
        <source src={data?.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : null);

  return (
    <PostContainer>
      <PostTop>
        <Avatar
          src={data?.profilePic}
          style={{ height: 50, width: 50 }}
          alt="User picture"
          draggable={false}
        />
        <div>
          <h4>{data?.username}</h4>
          <p>{moment(new Date(data?.timestamp?.toDate())).fromNow()}</p>
        </div>
        {user?.email === data?.userEmail ? (
          <button onClick={deletePost}>
            <Trash />
          </button>
        ) : null}
      </PostTop>
      <PostDescription>{data?.postDescription}</PostDescription>
      {Media}
      <PostBottom>
        <Reactions>
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt="like"
            draggable={false}
          />
          <span></span>
          <span>·</span>
          <p>{comments?.length} comments</p>
        </Reactions>
        <div>
          <PostBtn>
            <Like />
            <span>Link</span>
          </PostBtn>
          <PostBtn onClick={() => commentRef.current?.focus()}>
            <CommentLogo />
            <span>Comment</span>
          </PostBtn>
        </div>
        <CommentForm onSubmit={submitComment}>
          <Avatar src={user?.photoURL!} />
          <input
            ref={commentRef}
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="add a comment..."
          />
          <button type="submit">post comment</button>
        </CommentForm>
        <Comments>
          {comments?.map((comment) => (
            <Comment key={comment.id} postId={id} id={comment.id} data={comment.data} />
          ))}
        </Comments>
      </PostBottom>
    </PostContainer>
  );
};

export default Post;
