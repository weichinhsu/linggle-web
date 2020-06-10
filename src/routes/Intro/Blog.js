import React, { Component } from 'react'
import { connect } from 'dva';
import { Divider, Row, Col, Card } from 'antd'
import './Intro.css'
import mission from '../../assets/intro/mission.png'

const { Meta } = Card

class Blog extends Component {

  render() {
    return (
      <div className="blog-content">
        <section className="bg-primary" id="blog">
          <div className="left">
            <h3 className="text-uppercase font-weight-bold">NLPlab NTHU Taiwan</h3>
            <p>
              Natural Language Processing lab was established in 1988 by Prof. Jason S. Chang.
            </p>
            <p>
              The lab had since been a leading pioneer in AI research and projects,
              including computer-assisted language learning, word alignment, information retrieval and machine translation.
            </p>
          </div>
          <div className="right">

          </div>
        </section>
        <Divider />
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={mission} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={mission} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={mission} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={mission} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect()(Blog)