import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import { Home, Work, Skill } from './pages';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/skill" component={Skill} />
        <Route path="/work" component={Work} />
      </div>
    </Router>
  );
}

export default App;
