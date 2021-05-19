import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
`;
const CommentDescription = styled.div`
  margin-left: 0.5em;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 0.5em 0.75em;
  border-radius: 0 10px 10px;
  overflow: hidden;
  div {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1em;
    align-items: center;
    margin-bottom: 0.5em;
    h4 {
      font-weight: 600;
      font-size: 0.9rem;
    }
    span {
      cursor: pointer;
    }
    svg {
      object-fit: contain;
      width: 1em;
      height: 1em;
    }
  }
  p {
    font-size: 0.85rem;
  }
`;

export { CommentContainer, CommentDescription };
