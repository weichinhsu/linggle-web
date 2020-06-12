import React, { Component } from 'react'
import { connect } from 'dva';
import { Divider, Row, Col, Card } from 'antd'
import ReactMarkdown from 'react-markdown'
import './Intro.css'
import mission from '../../assets/intro/mission.png'


const { Meta } = Card

class BlogContent extends Component {
  state={
    md:''
  }
  async componentDidMount() {
    const file = await import(`../../assets/${this.props.location.state.data.file}`);
    console.log(file)
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
        md: text
    })
}
  render() {
    console.log(this.props.location.state.data)
    return (
      <div className="blog-content">
        <ReactMarkdown source={this.state.md} escapeHtml={false}/>
      </div>
    )
  }
}

export default connect()(BlogContent)