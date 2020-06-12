import React, { Component } from 'react'
import { connect } from 'dva';
import { Divider, Row, Col, Card } from 'antd'
import './Intro.css'
import data from '../../data/blog'
import mission from '../../assets/intro/mission.png'

// const data = from '../../assets/test.md'

const { Meta } = Card

class Blog extends Component {
  state = {
    md: ''
  }
  render() {
    return (
      <div className="blog-content">
        {/* <ReactMarkdown source={this.state.md} /> */}
        <section className="bg-primary" id="blog"
          onClick={() => this.props.history.push({
            pathname: '/intro/blog/' + data.new.title,
            state: { data: data.new }
          })}>
          <div className="left">
            <h3 className="text-uppercase font-weight-bold">{data.new.title}</h3>
            <p>
              {data.new.description}
            </p>
          </div>
          <div className="right">

          </div>
        </section>
        <Divider style={{ margin: '3em 0' }} />
        <Row gutter={[32, 32]}>
          {
            data.other.map((val, index) => {
              return <Col key={index} span={8}>
                <Card
                  hoverable
                  cover={<img alt="example" src={mission} />}
                >
                  <Meta title={val.title} description={val.description} />
                </Card>
              </Col>
            })
          }

        </Row>
      </div>
    )
  }
}

export default connect()(Blog)