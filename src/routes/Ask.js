import React, { Component } from 'react'
import { connect } from 'dva';
import './Ask.css'

class Ask extends Component {
  
  render() {
    return (
      <div className="container ask">
        <div className="row">
          <div className="col-9">N-gram</div>
          <div className="col-1">Percent</div>
          <div className="col-1">Count</div>
          <div className="col-1">Example</div>
        </div>
        <div className="row line">
          <div className="col-9">
            <span>discuss the</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '98%'}}></div>
            </div>
          </div>
          <div className="col-1">98 %</div>
          <div className="col-1">6,900,000</div>
          <div className="col-1">Example</div>
        </div>
        <div className="row line">
          <div className="col-9">
            <span>discuss with the</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '1.7%'}}></div>
            </div>
          </div>
          <div className="col-1">98 %</div>
          <div className="col-1">120,000</div>
          <div className="col-1">Example</div>
        </div>
        <div className="row line">
          <div className="col-9">
            <span>discuss about the</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '0.3%'}}></div>
            </div>
          </div>
          <div className="col-1">98 %</div>
          <div className="col-1">22,000</div>
          <div className="col-1">Example</div>
        </div>
        <div className="row line">
          <div className="col-9">
            <span>discuss to the</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '0%'}}></div>
            </div>
          </div>
          <div className="col-1">0 %</div>
          <div className="col-1">690</div>
          <div className="col-1">Example</div>
        </div>
      </div>
    )
  }
}

export default connect()(Ask)