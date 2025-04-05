import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {contextStatus: true, leftNavStatus: true, rightNavStatus: true}

  changeContent = () => {
    this.setState(prevState => ({contextStatus: !prevState.contextStatus}))
  }

  changeLeftNavbar = () => {
    this.setState(prevState => ({leftNavStatus: !prevState.leftNavStatus}))
  }

  changeRightNavbar = () => {
    this.setState(prevState => ({rightNavStatus: !prevState.rightNavStatus}))
  }

  render() {
    const {contextStatus, leftNavStatus, rightNavStatus} = this.state
    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent: contextStatus,
            showLeftNavbar: leftNavStatus,
            showRightNavbar: rightNavStatus,
            onToggleShowContent: this.changeContent,
            onToggleShowLeftNavbar: this.changeLeftNavbar,
            onToggleShowRightNavbar: this.changeRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
