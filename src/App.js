// import logo from './akash_banerjee-unsplash.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="*/main">
              <Main />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
