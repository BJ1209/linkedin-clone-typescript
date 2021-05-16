import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';
import { AppContainer, GlobalStyles } from './App.style';
import HomeScreen from './components/Home/HomeScreen';

import Login from './components/Login';
import { State } from './state';

const App: FC = () => {
  const user = useSelector((state: State) => state.auth.user);
  const history = useHistory();

  useEffect(() => {
    !user && history.replace('/auth');
  }, [user, history]);

  return (
    <AppContainer>
      <GlobalStyles />
      <Switch>
        <Route path="/auth">
          <Login />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </AppContainer>
  );
};

export default App;
