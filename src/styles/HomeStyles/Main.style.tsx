import styled from 'styled-components';
import { Card } from './Sidebar.style';
import { ReactComponent as PhotoIcon } from '../../assets/logo/photo.svg';
import { ReactComponent as VideoIcon } from '../../assets/logo/video-icon.svg';
import { ReactComponent as ArticleIcon } from '../../assets/logo/article-icon.svg';
import { ReactComponent as EventIcon } from '../../assets/logo/event-icon.svg';
export const Container = styled.div`
  grid-area: main;
  & > * + * {
    margin-top: 0.5em;
  }
`;
export const SharePost = styled(Card)`
  padding: 1em 1em 0;
  & > div {
    margin-bottom: 0.5em;
    display: flex;
  }
  & > div:last-child > * + * {
    margin-left: 2em;
  }
`;
export const PostBtnTop = styled.button`
  flex: 1;
  cursor: pointer;
  padding: 0 1em;
  text-align: left;
  letter-spacing: 1px;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 50px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const PostBtn = styled.button`
  flex: 1;
  padding: 0.75em;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.1s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > span {
    white-space: nowrap;
    margin-left: 0.5em;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }
`;
export const Photo = styled(PhotoIcon)`
  fill: rgb(112, 181, 249);
`;
export const Video = styled(VideoIcon)`
  fill: rgb(127, 193, 94);
`;
export const Event = styled(EventIcon)`
  fill: rgb(231, 163, 62);
`;
export const Article = styled(ArticleIcon)`
  fill: rgb(245, 152, 126);
`;
