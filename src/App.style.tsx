import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,html{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

export default GlobalStyles;
