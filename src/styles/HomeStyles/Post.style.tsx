import styled from 'styled-components';
import { Card } from './Sidebar.style';
import { ReactComponent as MoreIcon } from '../../assets/logo/more.svg';
import { ReactComponent as LikeIcon } from '../../assets/logo/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/logo/comment.svg';

export const PostContainer = styled(Card)`
  overflow: hidden;
`;
export const PostTop = styled.div`
  padding: 0.75em 1em 0;
  display: flex;
  align-items: center;
  div {
    margin-left: 1em;
    flex: 1;
  }
  h4 {
    font-weight: 600;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.5);
    &:last-of-type {
      font-size: 0.75rem;
    }
  }
  & > span {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: transparent;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;
export const More = styled(MoreIcon)`
  fill: rgba(0, 0, 0, 0.5);
`;
export const PostDescription = styled.p`
  padding: 1em;
  font-size: 0.9rem;
`;
export const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const PostBottom = styled.div`
  padding: 0.5em 1em;
  & > p {
    border-bottom: 1px solid lightgray;
    padding-bottom: 0.5em;
  }
  & > div {
    display: flex;
    padding-top: 0.5em;
    & > button {
      justify-content: center;
    }
  }
`;
export const Like = styled(LikeIcon)`
  fill: rgba(0, 0, 0, 0.5);
`;
export const Comment = styled(CommentIcon)`
  fill: rgba(0, 0, 0, 0.5);
`;
