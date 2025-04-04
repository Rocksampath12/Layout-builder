// Write your code here
import {Component} from 'react'

import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import Body from '../Body'

class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <div className="layout-box">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
