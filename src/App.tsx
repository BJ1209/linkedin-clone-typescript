import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { AppContainer, GlobalStyles } from './App.style';
import HomeScreen from './components/Home/HomeScreen';

import Login from './components/Login';

const App: FC = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <AppContainer>
      <GlobalStyles />
      <Switch>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </AppContainer>
  );
};

export default App;
