import { FC, useEffect, useState } from 'react';
import db from '../../config/firebase';
import { IFirebaseData } from '../../interfaces';
import { Like, LikesContainer } from '../../styles/Modal/ReactionModal.style';
import Avatar from '../Avatar';

interface IReactionsModal {
  postId: string;
  closeHandler(): void;
}

const ReactionsModal: FC<IReactionsModal> = ({ postId, closeHandler }) => {
  const [likes, setLikes] = useState<IFirebaseData[]>([]);
  useEffect(() => {
    db.collection('posts')
      .doc(postId)
      .collection('likes')
      .onSnapshot((snapshot) =>
        setLikes(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <LikesContainer>
      {likes.map((like) => {
        return (
          <Like key={like.id}>
            <Avatar src={like.data?.profilePic} alt="like profile" />
            <h4>{like.data?.username}</h4>
          </Like>
        );
      })}
    </LikesContainer>
  );
};

export default ReactionsModal;
