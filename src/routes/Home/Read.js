import React, { Component } from 'react'
import { connect } from 'dva';
import './Ask.css'

class Read extends Component {
  render() {
    return (
      <div className="read">
        <div className="left">
              <div contenteditable="true" className="form-control" id="input" style={{height: '100%;'}}>
              
              </div>
        </div>
        <div className="right">Read</div>
      </div>
    )
  }
}

export default connect()(Read)