import React, {lazy, Suspense} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Spinner from './Components/Shared/Spinner';

/*import About from './Components/About';
import Profile from './Components/Profile';
import User from './Components/User';
import ErrorComponent from './Components/ErrorComponent';
import Dashboard from './Components/Dashboard';*/

const lazyHome = lazy( () => import('./Components/Home'));
const lazyAbout = lazy(()=> import('./Components/About'));
const lazyProfile = lazy(()=> import('./Components/Profile'));
const lazyUser = lazy(()=> import('./Components/User'));
const lazyError= lazy(()=> import('./Components/ErrorComponent'));
const lazyDashboard = lazy(()=> import('./Components/Dashboard'));


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="content">
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path="/" exact component={lazyHome} />
          {/*<Route path="/about" component={About} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={User} />
          <Route path="/dashboard" component={Dashboard} />*/}
          
          <Route path="/about" component={lazyAbout} />
          <Route path="/profile" exact component={lazyProfile} />
          <Route path="/profile/:id" component={lazyUser} />
          <Route path="/dashboard" component={lazyDashboard} />
          <Route component={lazyError} />
          
        </Switch>
        </Suspense>
      </div>
    </div>
    </Router>
  );
}

export default App;
