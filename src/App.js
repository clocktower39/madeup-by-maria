import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FBD4D5',
    position: 'relative',
    minHeight: '100vh',
  },
  Navbar:{
  },
  Switch:{
  },
  Container: {
    height: '100%',
  },
  Footer:{
  },
})

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Router>
        <Navbar className={classes.Navbar} />
        <Switch className={classes.Switch} >
          <Container maxWidth={'sm'} className={classes.Container}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Container>
        </Switch>
        <Footer  className={classes.Footer} />
      </Router>
    </div>
  );
}

export default App;
