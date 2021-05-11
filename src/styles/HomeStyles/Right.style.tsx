import styled from 'styled-components';
import { ReactComponent as FeedIcon } from '../../assets/logo/feed-icon.svg';

export const Container = styled.div`
  grid-area: aside;
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
