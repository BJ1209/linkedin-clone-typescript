import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';
import firebase from 'firebase';
import moment from 'moment';
import db from '../../config/firebase';
import Comment from '../Comment';
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
import { PostBtn } from '../../styles/HomeStyles/Main.style';
import { State } from '../../state';
import { IFirebaseData } from '../../interfaces';
import Modal from '../Modal/Modal';
import ReactionsModal from '../Modal/ReactionsModal';

export interface IPostProps {
  id: string;
  data: firebase.firestore.DocumentData;
}

const Post: FC<IPostProps> = ({ id, data }) => {
  const user = useSelector((state: State) => state.auth.user);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [likesLength, setLikesLength] = useState<number>(0);
  const [comments, setComments] = useState<IFirebaseData[]>([]);
  const [input, setInput] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const commentRef = useRef<HTMLInputElement>(null);

  // open a modal
  const openModal = () => setShowModal(true);

  //Getting all the comments for a particular post
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

  // Getting the  likes number and checking is the post is liked by the user
  useEffect(() => {
    db.collection('posts')
      .doc(id)
      .collection('likes')
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) =>
          doc.data().userEmail === user?.email ? setHasLiked(true) : setHasLiked(false)
        );
        setLikesLength(snapshot.docs.length);
      });
  }, [id, user?.email]);

  // Delete a post
  const deletePost = () => {
    db.collection('posts')
      .doc(id)
      .delete()
      .then(() => console.log('post deleted'))
      .catch((err) => alert(err.message));
  };

  // like a post
  const likePost = () => {
    !hasLiked
      ? db
          .collection('posts')
          .doc(id)
          .collection('likes')
          .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user?.displayName,
            profilePic: user?.photoURL,
            userEmail: user?.email,
          })
          .then((res) => setHasLiked(true))
          .catch((err) => console.log(err.message))
      : db
          .collection('posts')
          .doc(id)
          .collection('likes')
          .get()
          .then((res) => {
            res.docs.forEach(
              (element) => element.data().userEmail === user?.email && element.ref.delete()
            );
            setHasLiked(false);
          })
          .catch((err) => console.log(err.messgae));
  };

  // post a comment
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
          {likesLength ? (
            <button onClick={openModal}>
              <img
                src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                alt="like"
                draggable={false}
              />
              <span>{likesLength}</span>
            </button>
          ) : null}
          {comments?.length ? (
            <>
              <span>·</span>
              <p>
                {comments?.length} {comments?.length === 1 ? 'comment' : 'comments'}
              </p>
            </>
          ) : null}
        </Reactions>
        <div>
          <PostBtn onClick={likePost}>
            {hasLiked ? (
              <img alt="like" src="https://static-exp1.licdn.com/sc/h/3yew62z57yb4vtsgl0ko7v5pw" />
            ) : (
              <Like />
            )}
            {
              <span style={{ color: hasLiked ? '#2977c9' : 'rgba(0,0,0,.5)' }}>
                {hasLiked ? 'Liked' : 'Like'}
              </span>
            }
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
      <Modal title="Reactions" showModal={showModal} closeHandler={() => setShowModal(false)}>
        <ReactionsModal postId={id} closeHandler={() => setShowModal(false)} />
      </Modal>
    </PostContainer>
  );
};

export default Post;
