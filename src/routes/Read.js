import React, { Component } from 'react'
import { connect } from 'dva';

class Read extends Component {
    render() {
        return (
            <div >
                Read
            </div>
        )
    }
}

export default connect()(Read)