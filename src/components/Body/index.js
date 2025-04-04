// Write your code here
import {Component} from 'react'

import './index.css'

class Body extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="left-navbar-container">
          <h1 className="body-heading">Left Navbar Menu</h1>
          <ul className="ul">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className="content-container">
          <h1 className="body-heading">Content</h1>
          <p className="body-para">
            Lorem ipsum solor alwfnalfnlanwfnal roihr oiuqri ihr ikqkrh
            ihqrkhqwkuhr ikhr iurkuh kuqhrku akwjdbauwukaz alwfa kawnfalkn
            lwaknfiaofn lkanwfioaf lknfoiaf lawnfhoianfw lkawhdfoiqafn
            alkwfjaoiwn
          </p>
        </div>
        <div className="right-navbar-container">
          <h1 className="body-heading">Right Navbar</h1>
          <div className="box-1">
            <p className="body-heading-1">Ad 1</p>
          </div>
          <div className="box-1">
            <p className="body-heading-1">Ad 2</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
