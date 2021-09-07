import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Profile from './Components/Profile';
import Nav from './Components/Nav';
import Home from './Components/Home';
import User from './Components/User';



function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={User} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
