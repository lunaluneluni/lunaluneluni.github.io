import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo_404 from '../assets/rusty_404.png';

function Error() {
  return (
    <div className='App'>
      <header>
        <h1>Ruh Roh</h1>
      </header>
      <img className='App-error-img' alt='404 Rusty' src={logo_404}></img>
      <p>
        Rusty can't fetch the page you are looking for.
        <br />
        Please allow him to guide you back to{' '}
        <Link className='App-landing-link' to='../main'>
          Main Menu
        </Link>
        <br />
        <br />
      </p>
    </div>
  );
}

export default Error;
