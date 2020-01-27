import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Ears from './pages/Ears';
import Meals from './pages/Meals';
const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
}));

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/ears/" component={Ears} />
        <Route path="/meals/" component={Meals} />
      </Switch>
    </Router>
  )
}
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <AppRouter />
    </div>
  );
}

export default App;
