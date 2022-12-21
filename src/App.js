import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Switch>
      <Container customClass ="min-height">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/company'>
        <Company />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/newproject'>
        <NewProject />
      </Route>
      </Container>
    </Switch>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
