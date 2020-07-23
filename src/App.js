import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer/Footer';
import MyHeader from './Header/MyHeader';
import MainHero from './Hero/MainHero';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <MyHeader />
      <MainHero />
      <MainHero />
      <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
