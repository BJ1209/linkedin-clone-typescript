import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { State } from '../../state';
import { GridContainer, Home } from '../../styles/HomeStyles/Home.style';
import Header from '../Header';
import Main from './Main';
import Right from './Right';
import Sidebar from './Sidebar';

const HomeScreen: FC = () => {
  const user = useSelector((state: State) => state.auth.user);
  const history = useHistory();

  useEffect(() => {
    !user && history.replace('/auth');
  }, [user, history]);

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
