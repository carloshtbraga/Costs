import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';


function App() {
  return (
   <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newproject">Novo Projeto</Link>
    </div>
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
    <p>Footer</p>
    </BrowserRouter>
   
  );
}

export default App;
