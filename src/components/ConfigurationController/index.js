// Write your code here
import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const changeContextFunc = () => {
            onToggleShowContent()
          }

          const changeLeftNavbarFunc = () => {
            onToggleShowLeftNavbar()
          }

          const changeRightNavbarFunc = () => {
            onToggleShowRightNavbar()
          }
          return (
            <div className="configuration-container">
              <h1 className="configuration-heading">Layout</h1>
              <input
                type="checkbox"
                id="layout-checkbox"
                checked={showContent}
                onChange={changeContextFunc}
              />
              <label htmlFor="layout-checkbox" className="input-text">
                Content
              </label>
              <br />
              <input
                type="checkbox"
                id="left-navbar-checkbox"
                checked={showLeftNavbar}
                onChange={changeLeftNavbarFunc}
              />
              <label htmlFor="left-navbar-checkbox" className="input-text">
                Left Navbar
              </label>
              <br />
              <input
                type="checkbox"
                id="right-navbar-checkbox-checkbox"
                checked={showRightNavbar}
                onChange={changeRightNavbarFunc}
              />
              <label
                htmlFor="right-navbar-checkbox-checkbox"
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
