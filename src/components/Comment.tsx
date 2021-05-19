import { FC } from 'react';
import Avatar from './Avatar';
import firebase from 'firebase';
import moment from 'moment';
import { Trash } from '../styles/HomeStyles/Post.style';
import { useSelector } from 'react-redux';
import { State } from '../state';
import db from '../config/firebase';
import { CommentContainer, CommentDescription } from '../styles/Comment.syyle';

interface IComment {
  id: string;
  postId: string;
  data: firebase.firestore.DocumentData;
}

const Comment: FC<IComment> = ({ id, data, postId }) => {
  const user = useSelector((state: State) => state.auth.user);

  const deleteComment = () =>
    db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .doc(id)
      .delete()
      .then(() => console.log('comment deleted'))
      .catch((err) => console.log(err.message));

  return (
    <CommentContainer>
      <Avatar src={data?.profilePic} style={{ minWidth: 40, minHeight: 40 }} />
      <CommentDescription>
        <div>
          <h4>{data?.username}</h4>
          <small>{moment(data?.timestamp?.toDate()).fromNow()}</small>
          {user?.email === data?.userEmail ? (
            <span onClick={deleteComment}>
              <Trash />
            </span>
          ) : null}
        </div>
        <p>{data?.comment}</p>
      </CommentDescription>
    </CommentContainer>
  );
};

export default Comment;
