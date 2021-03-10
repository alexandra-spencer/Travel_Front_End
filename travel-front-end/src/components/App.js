import React from 'react';
import '../App.css';
import Header from "./Header";
import CountryPage from "./CountryPage";
import 'semantic-ui-css/semantic.min.css';
// import {Route, BrowserRouter as Router, Link} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import {  Nav, NavDropdown } from 'react-bootstrap';
// import { Menu } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <Header />
      <br></br>
      <CountryPage />
      <br></br>
    </div>
  );
}

export default App;

