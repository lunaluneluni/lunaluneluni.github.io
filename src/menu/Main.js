import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "../assets/rusty.png";

function Main() {
  return (
    <div className='App'>
      <header>
        <h1>Hello Stranger</h1>
      </header>
      <img className='App-logo-img' alt='Smiling Rusty' src={logo}></img>
    </div>
  );
}

export default Main;
