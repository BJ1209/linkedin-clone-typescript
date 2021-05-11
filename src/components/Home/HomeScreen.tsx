import { GridContainer, Home } from '../../styles/HomeStyles/Home.style';
import Header from '../Header';
import Main from './Main';
import Right from './Right';
import Sidebar from './Sidebar';

const HomeScreen = () => {
  return (
    <Home>
      <Header />
      <GridContainer>
        <Sidebar />
        <Main />
        <Right />
      </GridContainer>
    </Home>
  );
};

export default HomeScreen;
