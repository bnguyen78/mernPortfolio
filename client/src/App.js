import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <About />
        </Route>

        <Route exact path="/portfolio">
          <Navbar />
          <Portfolio />
        </Route>

        <Route exact path="/contact">
          <Navbar />
          <Contact />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
