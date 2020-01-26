import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import OpenSource from './pages/OpenSource';
import Projects from './pages/Projects';
const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
}));

// function usePrevious(value) {
//   // The ref object is a generic container whose current property is mutable ...
//   // ... and can hold any value, similar to an instance property on a class
//   const ref = useRef();
  
//   // Store current value in ref
//   useEffect(() => {
//     ref.current = value;
//   }, [value]); // Only re-run if value changes
  
//   // Return previous value (happens before update in useEffect above)
//   return ref.current;
// }

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/skill/" component={Skill} />
        <Route path="/projects/" component={Projects} />
        <Route path="/opensource/" component={OpenSource} />
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
