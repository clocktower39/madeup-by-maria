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
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Navbar:{
    flexShrink: 0,

  },
  Switch:{
    flexShrink: 0,
    flexGrow: 1,
  },
  Footer:{
    flexShrink: 0,

  },
})

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Router>
        <Navbar className={classes.Navbar} />
        <Switch className={classes.Switch} >
          <Container maxWidth={'sm'}>
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
