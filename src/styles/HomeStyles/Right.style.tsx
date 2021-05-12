import styled from 'styled-components';
import { ReactComponent as FeedIcon } from '../../assets/logo/feed-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/logo/user.svg';

export const Container = styled.div`
  grid-area: aside;
  & > * + * {
    margin-top: 0.5em;
  }
`;
export const Feed = styled(FeedIcon)`
  fill: rgba(0, 0, 0, 0.65);
`;
export const News = styled.div`
  padding: 0.5em 1em;
  & > h3 {
    font-size: 0.8rem;
    font-weight: 600;
  }
  & > p {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const FeedList = styled.ul`
  list-style: none;
  padding: 0 1em 1em;
  & > * + * {
    margin-top: 1em;
  }
  & > p {
    font-size: 0.85rem;
    color: #2977c9;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const FeedItem = styled.li`
  display: flex;
  align-items: center;
`;
export const UserImage = styled(UserIcon)`
  object-fit: contain;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  margin-right: 0.75em;
`;
export const UserName = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.2em;
  font-weight: 600;
  color: #2977c9;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const FollowBtn = styled.button`
  border: 1px solid #2977c9;
  box-shadow: 0 0 0 1px #2977c9 inset;
  outline: none;
  background-color: transparent;
  padding: 0.25em 0.5em;
  border-radius: 50px;
  cursor: pointer;
`;
