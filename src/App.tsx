import { Route, Switch } from 'react-router';
import { AppContainer, GlobalStyles } from './App.style';
import Home from './components/Home';

import Login from './components/Login';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
