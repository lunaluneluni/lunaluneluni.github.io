import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Landing() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link className='App-landing-link' to='/main'>
          Click Me
        </Link>
      </header>
    </div>
  );
}

export default Landing;
