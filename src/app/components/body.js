import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

const Body = () => (
    <div className='body'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/page1' component={Page1}/>
        <Route path='/page2' component={Page2}/>
      </Switch>
    </div>
  )

export default Body;


/*
  render() {
        console.log("Route.path:"+Route.path+":");
      return (
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
      )
    }
}

*/