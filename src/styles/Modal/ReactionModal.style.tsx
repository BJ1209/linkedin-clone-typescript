import styled from 'styled-components';

const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  & > * + * {
    margin-top: 1em;
  }
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  h4 {
    flex: 1;
    font-size: 1rem;
    margin-left: 0.75em;
  }
`;

export { LikesContainer, Like };
