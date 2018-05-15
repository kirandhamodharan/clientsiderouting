import React, { Component } from 'react';
import headerlogo from '../../static/images/topbanner.png'

class Header extends Component {


    render() {
      return (
          <div className="pageHeader">
              <img src={headerlogo} />
        </div>
      )
    }
}
export default Header;
