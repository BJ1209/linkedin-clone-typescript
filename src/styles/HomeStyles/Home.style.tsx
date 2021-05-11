import styled from 'styled-components';

export const Home = styled.div``;

export const GridContainer = styled.div`
  padding: 3em 12em;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  grid-template-areas: ' sidebar main aside';
  grid-gap: 2em;
`;
