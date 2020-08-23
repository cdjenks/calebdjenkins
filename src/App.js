import React, { Component } from 'react';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <HashRouter basename="/react_portfolio">
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;


