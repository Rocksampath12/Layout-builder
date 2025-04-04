// Write your code here
import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext.js'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          let {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="configuration-container">
              <h1 className="configuration-heading">Layout</h1>
              <input
                type="checkbox"
                id="layout-checkbox"
                checked={showContent}
                onChange={this.changeContent}
              />
              <label for="layout-checkbox" className="input-text">
                Content
              </label>
              <br />
              <input
                type="checkbox"
                id="left-navbar-checkbox"
                checked={showLeftNavbar}
                onChange={this.changeLeftNavbar}
              />
              <label for="left-navbar-checkbox" className="input-text">
                Left Navbar
              </label>
              <br />
              <input
                type="checkbox"
                id="right-navbar-checkbox-checkbox"
                checked={showRightNavbar}
                onChange={this.changeRightNavbar}
              />
              <label
                for="right-navbar-checkbox-checkbox"
                className="input-text"
              >
                Right Navbar
              </label>
              <br />
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
