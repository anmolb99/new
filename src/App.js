import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Profiles from './Profiles';
import Stories from './Stories';
import Blog from './Blog.jsx';
import About from './About';
import Registration from './Registration';
import {BrowserRouter ,Route,Switch } from 'react-router-dom';
import Chat from './Chat'



function App() {
  return (
    <BrowserRouter>
    <div>

      <Menu />
      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/profiles"  component ={Profiles} />
        <Route path="/stories"  component ={Stories} />
        <Route path="/blog"  component ={Blog} />
        <Route path="/about"  component ={About} />
        <Route path="/registration"  component ={Registration} />
        <Route path="/chat"  component ={Chat} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
