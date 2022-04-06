// import logo from './akash_banerjee-unsplash.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Landing from './menu/Landing';
import Main from './menu/Main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/main'>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
