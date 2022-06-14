import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import { Link } from 'react-router-dom';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header title="Routing"/>
      <Link to={`/`}> Home </Link>
      <Link to={`/about`}> About </Link>
      <Link to={`/notes`}> Notes </Link>
      <Link to={`/contact`}> Contact </Link>
      <Content >
        {props.children}
      </Content>
      <Footer />
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;