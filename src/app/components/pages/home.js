import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
      return (
        <div>
            <div style={{background: '#dcdcdc'}}>
            <h1>Links:</h1>
              <Link to='/page1'>Page 1</Link> <br />
              <Link to='/page2'>Page 2</Link> <br />
            </div>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
        </div>
       
      )
    }
}
export default Home;
