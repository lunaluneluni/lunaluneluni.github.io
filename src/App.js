// import logo from './akash_banerjee-unsplash.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Landing from './menu/Landing';
import Main from './menu/Main';
import Error from './menu/Error';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/main'>
            <Main />
          </Route>
          <Route component={Error}>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
