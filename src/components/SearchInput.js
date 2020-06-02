import React, { Component } from 'react'
import { connect } from 'dva';

class Button extends Component {
  state = {
    search: ''
  }

  componentDidMount(){
    this.setState({search: this.props.value})
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  linggleSearch = (event) => {
    this.props.dispatch({
      type: 'search/GET_search',
      payload: this.state.search,
    });
    event.preventDefault();
  }

  render() {
    return <div className="border shadow px-3 py-1 mx-3 bg-white rounded-pill search">
      <form onSubmit={this.linggleSearch}>
        <div className="input-group">
          <div className="search-icon"></div>
          <input type="text" id="search" className="dropdown form-control border-0 shadow-none ml-4 mr-4"
            placeholder="Search Linggle, or enter any text or URL" autoFocus data-reference="parent"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            value={this.state.search} onChange={this.handleChange} />
          <div className="dropdown-menu" aria-labelledby="search">
          </div>
        </div>
      </form>
    </div>
  }
}

export default connect()(Button)