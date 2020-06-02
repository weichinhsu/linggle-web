import React, { Component } from 'react'
import { connect } from 'dva';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Ask.css'

class Ask extends Component {
  linggleExample(ngram) {
    this.props.dispatch({
      type: 'search/GET_example',
      payload: ngram
    });
  }
  renderExample = (value, index, ngram) => {
    let regexp = new RegExp(ngram, 'ig');
    return <div key={index}>
      <FontAwesomeIcon icon={faChevronCircleRight} className="feature-icon" />
      <span dangerouslySetInnerHTML={{ __html: value.replace(regexp, '<span class="highlight">$&</span>') }}></span>
    </div>
  }
  renderRowDate = (value, index) => {
    const total = this.props.list.map((v) => { return v[1] }).reduce((a, b) => { return a + b });
    const percentage = Math.round(value[1] / total * 10000) / 100
    const { example } = this.props
    const icon = faPlus === faPlus ? faMinus : faPlus

    return <div key={index} className="row line">
      <div className="col-9">
        <span>{value[0]}</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{ width: percentage + '%' }}></div>
        </div>
      </div>
      <div className="col-1">{percentage} %</div>
      <div className="col-1">{value[1]}</div>
      <div className="col-1 ask-icon" onClick={() => this.linggleExample(value[0])}>
        <FontAwesomeIcon icon={faPlus} className="feature-icon" />
      </div>
      {example ? <div className="col-12 example">
        {example.ngram === value[0] ? example.examples.map((value, index) => this.renderExample(value, index, example.ngram)) : null}
      </div>
        : null}
    </div>
  }
  render() {
    const { list } = this.props
    return (
      <div className="container ask">
        <div className="row">
          <div className="col-9">N-gram</div>
          <div className="col-1">Percent</div>
          <div className="col-1">Count</div>
          <div className="col-1">Example</div>
        </div>
        {list ? this.props.list.map((value, index) => this.renderRowDate(value, index)) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.search.list ? state.search.list.ngrams : null,
    example: state.search.example ? state.search.example : null
  }
}

export default connect(mapStateToProps)(Ask)