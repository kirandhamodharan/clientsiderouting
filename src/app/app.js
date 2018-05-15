import React, { Component } from 'react';
import logo from '../static/images/GoodJob.png'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class App extends Component {
    render() {
      return (
          <div>
              <Header />
              <Body />
              <Footer />
        </div>
      )
    }
}
export default App;
